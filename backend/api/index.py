from typing import List, Optional
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, parse_obj_as
import time
import logging
import pandas as pd
from api.filter_cars_using_prompt_conversation import generate_response_and_update_messages, load_and_preprocess_data


class Car(BaseModel):
    Brand: str
    Model: str
    Car_Name: str
    Price: float
    Type: str
    Size: str
    Category: str
    Engine: str
    Acceleration: float
    Horsepower: float


class Message(BaseModel):
    role: str
    content: str


class CarPrompt(BaseModel):
    messages: List[Message]
    cars: Optional[List[Car]] = []


class CarResponse(BaseModel):
    messages: List[Message]
    cars: List[Car]


app = FastAPI()

origins = [
    "http://localhost:3000",  # Allow frontend origin
    "https://al-futtaim-demo-git-feature-deploy-hurricaneskcs-projects.vercel.app/",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # List of allowed origins
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods
    allow_headers=["*"],  # Allow all headers
)


@app.get("/api/cars")
def hello_world():
    return {"message": "Hello World"}


@app.post("/api/cars", response_model=CarResponse)
async def get_cars(data: CarPrompt):
    logging.basicConfig(level=logging.INFO)
    logger = logging.getLogger(__name__)
    logger.info(f'Received data: {data}')

    if not data.cars:
        df = load_and_preprocess_data(path="api/aggregated_data.xlsx")

    else:
        logger.info(f' else ')
        # logger.info(f' type :{type(data.cars)}')
        # logger.info(f' type 0 :{type(data.cars[0])}')

        cars_dict = [car.__dict__ for car in data.cars]
        df = pd.DataFrame(cars_dict)

    messages_dic = [messages.__dict__ for messages in data.messages]
    # logger.info(f'messages_dic: {messages_dic}')
    # logger.info(f'data.messages: {data.messages}')

    # logger.info(f'df columns : {df.columns}')
    # logger.info(f'df  : {df.shape}')

    logger.info(f'before  generate_response_and_update_messages')

    start = time.time()

    output_df, messages = generate_response_and_update_messages(
        messages_dic, df)

    logger.info(f'after  generate_response_and_update_messages')
    end = time.time()

    print(end - start)

    # logger.info(f'messages : {messages}')
    # logger.info(f'output_df : {output_df.shape}')

    output_dic = output_df.to_dict('records')
    cars_data = parse_obj_as(List[Car], output_dic)

    return {
        "messages": messages,
        "cars": cars_data
    }
