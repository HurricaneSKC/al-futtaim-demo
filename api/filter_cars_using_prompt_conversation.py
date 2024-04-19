import re
import json
import openai
import tiktoken
import pandas as pd
import warnings
import logging

# TODO [STATUS: Next] add more fearures similar to "Fuel Efficiency", "Safety",  "Navigation System",  "Interior Information", "Exterior Information" to data
# TODO [STATUS: Maybe] Optimize overall experience.

warnings.simplefilter(action='ignore', category=FutureWarning)


def load_data(path):
    xl = pd.ExcelFile(path)
    sheet_name = xl.sheet_names[-1]
    df = xl.parse(sheet_name)
    return df

def load_and_preprocess_data(path):
    df = load_data(path)
    df.dropna(inplace = True)
    df = df.fillna("")

    object_cols = ['Brand', 'Model', 'Type', 'Size', 'Category', 'Engine']

    for col in object_cols:
        df[col] = df[col].astype(str)

    df['Car_Name'] = df['Brand'] + '_' + df['Model'] 
    df['Car_Name'] = df['Car_Name'].astype(str)


    return df

def generate_response_prompt(output_df):
    return (
        f"Car sales agent, take careful note of your assignment: Generate a single data-related question strictly based on the provided car data, namely 'Car_Name' column, and past customer preferences. If this data is empty, make no suggestions and let the customer know there aren't any currently available cars that match their specifications.\n\n"
        f"To help find the best car for you, could we chat about your driving habits? For instance, do you drive mostly in the city or on highways? Do you prefer a smooth and quiet ride or something a bit more energetic? Also, do you need a lot of space in your car for things like hobbies, sports gear, or shopping trips? Or are you more interested in a smaller car that's easy to park? Understanding these preferences will help us find the perfect car for you\n"
        f"Always ask additional questions not related to the subject you just provided information on, engage the user into continuing the conversation\n"
        f"Available Car Data:\n"
        f"{output_df.reset_index(drop = True).to_string()}\n\n"
        f"Adhere rigidly to this directive: ***Do not - under any circumstances - suggest cars that are not included in the provided list***. Doing so will ensure we provide accurate information to refine customer preferences.\n\n"
        f"Your response should be casual, capped at two sentences, and should mimic a human-like interaction. Always try to continue the conversation with the user with a new question"
        )

def interactive_prompt(df):
    system_prompt = {
        "role": "system", 
        "content" : generate_response_prompt(df)
    }

    user_input = input("You: ")
    user_prompt = {"role": "user", "content": user_input}
    messages = [system_prompt, user_prompt]
    # print(messages)
    output_df, messages = generate_response_and_update_messages(messages, df)

    for message in messages:
        print(f"{message['role'].title()}: {message['content']}\n\n")
  
    if output_df.empty:
        print("Sorry, we couldn't find any cars that match your criteria.")
    else:
        while True:
            user_input = input("You: ")
            user_message = {"role": "user", "content": user_input}
            messages.append(user_message)

            output_df, messages = generate_response_and_update_messages(messages, output_df)
            last_message = messages[-1]
            print(f"{last_message['role']}: {last_message['content']}\n\n")

            if output_df.empty:
                print("Sorry, we couldn't find any cars that match your criteria ***FROM DATA***.")
                # print(messages)
                break


            if user_input.lower() in ['quit', 'exit']:
                break

        # print(messages)

## TODO rename the method zto better name to improve readability
def descriptive_filtering(df, user_prompt):

    
    data_new_format = """
    I want you to output car data in a specialized, compact string format. Start by creating a single key named 'd'. The value associated with this key will be a single string that consolidates all car data.

    For each car, concatenate feature values into a comma-separated string in this order: Brand, Model, Price, Acceleration, Horsepower, Type, Size, Category, Engine, Car_Name.

    If there is information about more than one car, separate each car's data with a semicolon. Here's an example of how I want the output to look like:

    """

    data_new_output_sample =  '{"d":"Honda,Pilot,149858.33,6.2,280,SUV,s,Lux,3V,HP;Jeep,GC,204908.33,6.16,393.66,SUV,s,Sport,6V,JGC"}'


    data_json_format_prompt = f"""
    The data should be consistent, properly formatted JSON objects without any superfluous text or code. 
    """

    json_sample_output = """
    Here is the filtered data in JSON format:\n\n
    {
    "cars": [
        {
        "Brand": "Honda",
        "Model": "Pilot",
        "Price": 149858.333333,
        "Acceleration": 6.2,
        "Horsepower": 280.0,
        "Type": "SUV",
        "Size": "Mid-size",
        "Category": "Luxury",
        "Engine": "3.5L V6",
        "Car_Name": "Honda Pilot"
        },
        {
        "Brand": "Jeep",
        "Model": "Grand Cherokee",
        "Price": 204908.333333,
        "Acceleration": 6.166667,
        "Horsepower": 393.666667,
        "Type": "SUV",
        "Size": "Mid-size",
        "Category": "Sport",
        "Engine": "6.2L V8",
        "Car_Name": "Jeep Grand Cherokee"
        }
    ]
    }
    """
    prompt = f"""
            Referring to our current inventory as listed:
            {df.reset_index(drop = True).to_string()}

            Customer Request :  {user_prompt}

            Your task is to deduce suitable tags from the customer's request, filter the data based on these tags, then present the refined data in given format below.  
            The finalized data should align with this sample output and be formatted as a list named 'cars'. 
            
            Important: 
            - Pricing is in AED (United Arab Emirates dirham). Please adjust your output to reflect this currency.
            - Keep in mind that lower acceleration times indicate higher speeds while filtering data on speed basis.             
            - You should not return any code snippets or programming language syntax. Only provide the finalized data in the specified format.             

            format : {data_new_format}

            
            Sample Output:  {data_new_output_sample}

            """
  

    
    logger.info(f'before  invoke_model_prompt')
    logger.info(f'prompt :{prompt}')


    output = invoke_model_prompt(prompt)

    logger.info(f'output :{output}')



        # print("'output' contains the string")
        # output = invoke_model_prompt(prompt)
        # print(output)

    ###################### NEW WAY ######################

    # condensed data
    # data = '{"d":"Honda,Pilot,149858.33,6.2,280,SUV,s,Lux,3V,HP;Jeep,GC,204908.33,6.16,393.66,SUV,s,Sport,6V,JGC"}'


    match = re.search(r'\{.*\}', output, re.DOTALL)
    if match:
        json_str = match.group()

        # Load the data as dictionary
        data_dict = json.loads(json_str)

        logger.info(f'data_dict : {data_dict}')

        # Key names for each attribute in the original cars data
        keys = ["Brand", "Model", "Price", "Acceleration", "Horsepower", "Type", "Size", "Category", "Engine", "Car_Name"]

        # Split the string using semicolon and comma to rebuild the original data structure.
        cars_data = [dict(zip(keys, car.split(','))) for car in data_dict['d'].split(';')]
        logger.info(f'cars_data : {cars_data}')

        # Convert the list of dictionaries into a DataFrame
        output_df = pd.DataFrame(cars_data)
        logger.info(f' after filtering output_df : {output_df.to_string()} ')

        ###################### NEW WAY ######################

        return output_df
    
    return df



    ###################### OLD WAY ######################

    # match = re.search(r'\{.*\}', output, re.DOTALL)
    # if match:
    #     json_str = match.group()
    #     logger.info(f' json_str : {json_str} ')
    #     try :
    #         parsed_json = json.loads(json_str)
    #         json_df = pd.DataFrame(parsed_json['cars'])
    #         # print(json_df)
    #         # print(df.shape)
    #     except:
    #         logger.info(f' json.loads error ')
    #         return df

    #     return json_df

    ###################### OLD WAY ######################



def generate_response_and_update_messages(messages, df):

    initial_prompt = messages[-1]['content']

    logger.info(f'initial_prompt : {initial_prompt} ')

    if  messages[-1]['role'] != 'system':

        logger.info(f'before  descriptive_filtering')

        if df.shape[0] > 1:
            output_df = descriptive_filtering(df, initial_prompt)
        else:
            logger.info(f'inside else df.shape[0] > 1 ')
            output_df = df


        if output_df.shape[0] != 0:
            response_prompt = generate_response_prompt(output_df)

            messages[0] = {"role": "system", "content": response_prompt}
            # print(f"{messages[0]['role'].title()}: {messages[0]['content']}\n\n")

            messages = invoke_model_response_prompt(messages)

            messages[0] = {"role": "system", "content": ""}



        logger.info(f'end of generate_response_and_update_messages')

        return output_df, messages
    
    return df, messages



def invoke_model_prompt(prompt: str, max_tokens: int = 1000, temperature: float = 0.0):
    

    logger.info(f'before  openai.AzureOpenAI')

    # TODO save api_key in different place
    client = openai.AzureOpenAI(
    api_key = "4013347370a54dd4bfc1f62569f16f20",# leave your key here
    api_version =  "2023-07-01-preview",
    azure_endpoint = "https://ai-proxy.lab.epam.com"
  )
    
    logger.info(f'before  client.chat.completions')

 
    response = client.chat.completions.create(
    model="gpt-35-turbo",
    temperature= 0,
    messages=[
        {"role": "system", "content": ""},
        {"role": "user", "content": prompt},
    ], max_tokens= 5000
    )

    logger.info(f'after   client.chat.completions')

    return response.choices[0].message.content


def invoke_model_response_prompt(messages, max_tokens=1000, temperature=0.0):
    
    # TODO save api_key in different place
    client = openai.AzureOpenAI(
    api_key = "4013347370a54dd4bfc1f62569f16f20",# leave your key here
    api_version =  "2023-07-01-preview",
    azure_endpoint = "https://ai-proxy.lab.epam.com"
  )
 
    response = client.chat.completions.create(
    model="gpt-35-turbo",
    messages=messages,
    max_tokens= 5000
    )


    assistant_message = response.choices[0].message.content
    messages.append({"role": "assistant", "content": assistant_message})

    return messages

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)
handler = logging.StreamHandler()
format = logging.Formatter('%(name)s - %(asctime)s - %(levelname)s - %(message)s',
                           datefmt='%d-%b-%y %H:%M:%S')

handler.setFormatter(format)
logger.addHandler(handler)
## for testing using terminal

# df = load_and_preprocess_data(path="api/aggregated_data.xlsx")
# df['Car_Name'] = df['Brand'] + ' ' + df['Model'] 
# interactive_prompt(df)
