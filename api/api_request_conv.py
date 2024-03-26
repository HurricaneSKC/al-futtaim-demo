import requests
import json

url = 'http://localhost:8000/api/cars/'

data = {

       "messages" : [{'role': 'system',
                     'content': """Car sales agent, take careful note of your assignment: Generate a single data-related question strictly based on the provided car data, namely "Car_Name" column, and past customer preferences. If this data is empty, make no suggestions and let the customer know there aren't any currently available cars that match their specifications.\n\nAvailable Car Data:\n       Brand           Model          Price  Acceleration  Horsepower           Type       Size     Category                                                 Engine             Car_Name\n0   Chrysler             300  137625.000000      6.050000  311.750000          Sedan  Full-size       Luxury                                                5.7L V8         Chrysler 300\n1   Chrysler        Pacifica  155057.500000      7.300000  287.000000        Minivan  Full-size       Family                                                3.6L V6    Chrysler Pacifica\n2   Chrysler         
Voyager  111323.333333      7.300000  287.000000        Minivan  Full-size       Family                                                3.6L V6     Chrysler Voyager\n3      Dodge      Challenger  183500.000000      4.900000  496.666667          Coupe   Mid-size  Performance                                   6.2L V8 Supercharged     Dodge Challenger\n4      Dodge         Charger  164416.000000      5.220000  432.800000          Sedan  Full-size  Performance                           
        6.2L V8 Supercharged        Dodge Charger\n5      Dodge         Durango  171756.000000      6.560000  342.800000            SUV   Mid-size  Performance                                                6.4L V8        Dodge Durango\n6      Dodge   Grand Caravan  110100.000000      7.800000  283.000000            Van  Full-size       Family                                                3.6L V6  Dodge Grand Caravan\n7      Honda          Accord  107898.000000      6.640000  214.600000          Sedan   Mid-size       Luxury                                  2.0L Turbo 4-Cylinder         Honda Accord\n8      Honda            CR-V  105696.000000      7.520000  189.000000            SUV    Compact       Luxury                                  1.5L Turbo 4-Cylinder           Honda CR-V\n9      Honda           Civic   89548.000000      7.300000  167.600000          Sedan    Compact       Luxury                                  1.5L Turbo 4-Cylinder          Honda Civic\n10     Honda         Odyssey  145332.000000      6.600000  280.000000        Minivan  Full-size       Luxury                                             
   3.5L V6        Honda Odyssey\n11     Honda           Pilot  149858.333333      6.200000  280.000000            SUV   Mid-size       Luxury                     
                           3.5L V6          Honda Pilot\n12      Jeep        Cherokee  116063.750000      9.500000  202.750000            SUV   Mid-size    Adventure                                                3.2L V6        Jeep Cherokee\n13      Jeep       Gladiator  150470.000000      7.000000  285.000000         Pickup   Mid-size    Adventure                                                3.6L V6       Jeep Gladiator\n14      Jeep  Grand Cherokee  204908.333333      6.166667  393.666667            SUV   Mid-size        Sport                                                6.2L V8  Jeep Grand Cherokee\n15      Jeep        Wrangler  129367.500000      7.000000  285.000000            SUV   Mid-size    Adventure                                                3.6L V6        Jeep Wrangler\n16     Lexus              IS  179830.000000      5.440000  361.400000          Sedan    Compact        Sport                                                5.0L V8             Lexus IS\n17     Lexus              NX  181665.000000      8.000000  271.000000            SUV   Mid-size       Family                                 2.5L 4-Cylinder Hybrid             Lexus NX\n18     Lexus              UX  128450.000000      8.900000  169.000000            SUV    Compact        Sport               
                         2.0L 4-Cylinder             Lexus UX\n19       RAM            1500  154874.000000      6.680000  359.000000         Pickup  Full-size       Luxury                                                     V8             RAM 1500\n20       RAM            2500  173224.000000      7.860000  374.000000         Pickup  Full-size       Luxury                                                     V8             RAM 2500\n21       RAM            3500  177077.500000      8.500000  396.500000         Pickup  Full-size       Luxury                                                     V8             RAM 3500\n22    Toyota           Camry  112302.000000      7.120000  243.200000          Sedan   Mid-size       Family                                 2.5L 4-Cylinder Hybrid         Toyota Camry\n23    Toyota         Corolla   86245.000000     10.900000  121.000000          Sedan    Compact       Family                                 1.8L 4-Cylinder Hybrid       Toyota Corolla\n24    Toyota           Crown  146800.000000      8.000000  211.333333          Sedan  Full-size       Luxury                                 2.5L 4-Cylinder Hybrid         Toyota Crown\n25    Toyota           Prius   88080.000000     10.500000  121.000000      Hatchback    Compact       Family                                 1.8L 4-Cylinder Hybrid         Toyota Prius\n26    Toyota          Sienna  133343.333333      7.000000  296.000000        Minivan  Full-size       Family                                                3.5L V6        Toyota Sienna\n27     Volvo             S60  177995.000000      5.450000  307.750000          Sedan   Mid-size        Sport  2.0L 4-Cylinder Turbo and Supercharged Plug-In Hybrid            Volvo S60\n28     Volvo             V60  176160.000000      6.225000  266.500000  Station Wagon   Mid-size     Off-Road                           2.0L 4-Cylinder Turbocharged            Volvo V60\n29     Volvo            XC40  138236.666667      6.200000  248.000000            SUV    Compact       Luxury                           2.0L 4-Cylinder Turbocharged           Volvo XC40\n30     Volvo            XC60  168208.333333      6.033333  272.000000            SUV   Mid-size       Luxury                           2.0L 4-Cylinder Turbocharged           Volvo XC60\n31     Volvo            XC90  195733.333333      5.900000  316.000000            SUV  Full-size       Luxury                 2.0L 4-Cylinder Turbo and Supercharged           Volvo XC90\n\nAdhere rigidly to this directive: ***Do not - under any circumstances - suggest cars that are not included in the provided list***. Doing so will ensure we provide accurate information to refine customer preferences.\n\nYour response should be casual, capped at two sentences, and should mimic a human-like interaction."""},
                  {'role': 'user',
                   'content': 'My neighbour has bought a Dodge Charger. Show me all the cars that are faster than his.'}
                  ],
      "cars": [
        {
            "Brand": "Chrysler",
            "Model": "300",
            "Price": 137625.0,
            "Acceleration": 6.05,
            "Horsepower": 311.75,
            "Type": "Sedan",
            "Size": "Full-size",
            "Category": "Luxury",
            "Engine": "5.7L V8",
            "Car_Name": "Chrysler 300"
        },
        {
            "Brand": "Chrysler",
            "Model": "Pacifica",
            "Price": 155057.5,
            "Acceleration": 7.3,
            "Horsepower": 287.0,
            "Type": "Minivan",
            "Size": "Full-size",
            "Category": "Family",
            "Engine": "3.6L V6",
            "Car_Name": "Chrysler Pacifica"
        },
        {
            "Brand": "Chrysler",
            "Model": "Voyager",
            "Price": 111323.3,
            "Acceleration": 7.3,
            "Horsepower": 287.0,
            "Type": "Minivan",
            "Size": "Full-size",
            "Category": "Family",
            "Engine": "3.6L V6",
            "Car_Name": "Chrysler Voyager"
        },
        {
            "Brand": "Dodge",
            "Model": "Challenger",
            "Price": 183500.0,
            "Acceleration": 4.9,
            "Horsepower": 496.6,
            "Type": "Coupe",
            "Size": "Mid-size",
            "Category": "Performance",
            "Engine": "6.2L V8 Supercharged",
            "Car_Name": "Dodge Challenger"
        },
        {
            "Brand": "Dodge",
            "Model": "Charger",
            "Price": 164416.0,
            "Acceleration": 5.22,
            "Horsepower": 432.8,
            "Type": "Sedan",
            "Size": "Full-size",
            "Category": "Performance",
            "Engine": "6.2L V8 Supercharged",
            "Car_Name": "Dodge Charger"
        },
        {
            "Brand": "Dodge",
            "Model": "Durango",
            "Price": 171756.0,
            "Acceleration": 6.56,
            "Horsepower": 342.8,
            "Type": "SUV",
            "Size": "Mid-size",
            "Category": "Performance",
            "Engine": "6.4L V8",
            "Car_Name": "Dodge Durango"
        },
        {
            "Brand": "Dodge",
            "Model": "Grand Caravan",
            "Price": 110100.0,
            "Acceleration": 7.8,
            "Horsepower": 283.0,
            "Type": "Van",
            "Size": "Full-size",
            "Category": "Family",
            "Engine": "3.6L V6",
            "Car_Name": "Dodge Grand Caravan"
        },
        {
            "Brand": "Honda",
            "Model": "Accord",
            "Price": 107898.0,
            "Acceleration": 6.64,
            "Horsepower": 214.6,
            "Type": "Sedan",
            "Size": "Mid-size",
            "Category": "Luxury",
            "Engine": "2.0L Turbo 4-Cylinder",
            "Car_Name": "Honda Accord"
        },
        {
            "Brand": "Honda",
            "Model": "CR-V",
            "Price": 105696.0,
            "Acceleration": 7.52,
            "Horsepower": 189.0,
            "Type": "SUV",
            "Size": "Compact",
            "Category": "Luxury",
            "Engine": "1.5L Turbo 4-Cylinder",
            "Car_Name": "Honda CR-V"
        },
        {
            "Brand": "Honda",
            "Model": "Civic",
            "Price": 89548.0,
            "Acceleration": 7.3,
            "Horsepower": 167.6,
            "Type": "Sedan",
            "Size": "Compact",
            "Category": "Luxury",
            "Engine": "1.5L Turbo 4-Cylinder",
            "Car_Name": "Honda Civic"
        },
        {
            "Brand": "Honda",
            "Model": "Odyssey",
            "Price": 145332.0,
            "Acceleration": 6.6,
            "Horsepower": 280.0,
            "Type": "Minivan",
            "Size": "Full-size",
            "Category": "Luxury",
            "Engine": "3.5L V6",
            "Car_Name": "Honda Odyssey"
        },
        {
            "Brand": "Honda",
            "Model": "Pilot",
            "Price": 149858.3,
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
            "Model": "Cherokee",
            "Price": 116063.75,
            "Acceleration": 9.5,
            "Horsepower": 202.75,
            "Type": "SUV",
            "Size": "Mid-size",
            "Category": "Adventure",
            "Engine": "3.2L V6",
            "Car_Name": "Jeep Cherokee"
        },
        {
            "Brand": "Jeep",
            "Model": "Gladiator",
            "Price": 150470.0,
            "Acceleration": 7.0,
            "Horsepower": 285.0,
            "Type": "Pickup",
            "Size": "Mid-size",
            "Category": "Adventure",
            "Engine": "3.6L V6",
            "Car_Name": "Jeep Gladiator"
        },
        {
            "Brand": "Jeep",
            "Model": "Grand Cherokee",
            "Price": 204908.3,
            "Acceleration": 6.16,
            "Horsepower": 393.67,
            "Type": "SUV",
            "Size": "Mid-size",
            "Category": "Sport",
            "Engine": "6.2L V8",
            "Car_Name": "Jeep Grand Cherokee"
        },
        {
            "Brand": "Jeep",
            "Model": "Wrangler",
            "Price": 129367.5,
            "Acceleration": 7.0,
            "Horsepower": 285.0,
            "Type": "SUV",
            "Size": "Mid-size",
            "Category": "Adventure",
            "Engine": "3.6L V6",
            "Car_Name": "Jeep Wrangler"
        },
        {
            "Brand": "Lexus",
            "Model": "IS",
            "Price": 179830.0,
            "Acceleration": 5.44,
            "Horsepower": 361.4,
            "Type": "Sedan",
            "Size": "Compact",
            "Category": "Sport",
            "Engine": "5.0L V8",
            "Car_Name": "Lexus IS"
        },
        {
            "Brand": "Lexus",
            "Model": "NX",
            "Price": 181665.0,
            "Acceleration": 8.0,
            "Horsepower": 271.0,
            "Type": "SUV",
            "Size": "Mid-size",
            "Category": "Family",
            "Engine": "2.5L 4-Cylinder Hybrid",
            "Car_Name": "Lexus NX"
        },
        {
            "Brand": "Lexus",
            "Model": "UX",
            "Price": 128450.0,
            "Acceleration": 8.9,
            "Horsepower": 169.0,
            "Type": "SUV",
            "Size": "Compact",
            "Category": "Sport",
            "Engine": "2.0L 4-Cylinder",
            "Car_Name": "Lexus UX"
        },
        {
            "Brand": "RAM",
            "Model": "1500",
            "Price": 154874.0,
            "Acceleration": 6.68,
            "Horsepower": 359.0,
            "Type": "Pickup",
            "Size": "Full-size",
            "Category": "Luxury",
            "Engine": "V8",
            "Car_Name": "RAM 1500"
        },
        {
            "Brand": "RAM",
            "Model": "2500",
            "Price": 173224.0,
            "Acceleration": 7.86,
            "Horsepower": 374.0,
            "Type": "Pickup",
            "Size": "Full-size",
            "Category": "Luxury",
            "Engine": "V8",
            "Car_Name": "RAM 2500"
        },
        {
            "Brand": "RAM",
            "Model": "3500",
            "Price": 177077.5,
            "Acceleration": 8.5,
            "Horsepower": 396.5,
            "Type": "Pickup",
            "Size": "Full-size",
            "Category": "Luxury",
            "Engine": "V8",
            "Car_Name": "RAM 3500"
        },
        {
            "Brand": "Toyota",
            "Model": "Camry",
            "Price": 112302.0,
            "Acceleration": 7.12,
            "Horsepower": 243.2,
            "Type": "Sedan",
            "Size": "Mid-size",
            "Category": "Family",
            "Engine": "2.5L 4-Cylinder Hybrid",
            "Car_Name": "Toyota Camry"
        },
        {
            "Brand": "Toyota",
            "Model": "Crown",
            "Price": 146800.0,
            "Acceleration": 8.0,
            "Horsepower": 211.3,
            "Type": "Sedan",
            "Size": "Full-size",
            "Category": "Luxury",
            "Engine": "2.5L 4-Cylinder Hybrid",
            "Car_Name": "Toyota Crown"
        },
        {
            "Brand": "Toyota",
            "Model": "Sienna",
            "Price": 133343.3,
            "Acceleration": 7.0,
            "Horsepower": 296.0,
            "Type": "Minivan",
            "Size": "Full-size",
            "Category": "Family",
            "Engine": "3.5L V6",
            "Car_Name": "Toyota Sienna"
        },
        {
            "Brand": "Volvo",
            "Model": "S60",
            "Price": 177995.0,
            "Acceleration": 5.45,
            "Horsepower": 307.75,
            "Type": "Sedan",
            "Size": "Mid-size",
            "Category": "Sport",
            "Engine": "2.0L 4-Cylinder Turbo and Supercharged Plug-In Hybrid",
            "Car_Name": "Volvo S60"
        },
        {
            "Brand": "Volvo",
            "Model": "V60",
            "Price": 176160.0,
            "Acceleration": 6.225,
            "Horsepower": 266.5,
            "Type": "Station Wagon",
            "Size": "Mid-size",
            "Category": "Off-Road",
            "Engine": "2.0L 4-Cylinder Turbocharged",
            "Car_Name": "Volvo V60"
        },
        {
            "Brand": "Volvo",
            "Model": "XC40",
            "Price": 138236.67,
            "Acceleration": 6.2,
            "Horsepower": 248.0,
            "Type": "SUV",
            "Size": "Compact",
            "Category": "Luxury",
            "Engine": "2.0L 4-Cylinder Turbocharged",
            "Car_Name": "Volvo XC40"
        },
        {
            "Brand": "Volvo",
            "Model": "XC60",
            "Price": 168208.3,
            "Acceleration": 6.03,
            "Horsepower": 272.0,
            "Type": "SUV",
            "Size": "Mid-size",
            "Category": "Luxury",
            "Engine": "2.0L 4-Cylinder Turbocharged",
            "Car_Name": "Volvo XC60"
        },
        {
            "Brand": "Volvo",
            "Model": "XC90",
            "Price": 195733.3,
            "Acceleration": 5.9,
            "Horsepower": 316.0,
            "Type": "SUV",
            "Size": "Full-size",
            "Category": "Luxury",
            "Engine": "2.0L 4-Cylinder Turbo and Supercharged",
            "Car_Name": "Volvo XC90"
        },
        ]
}

response = requests.post(url, data=json.dumps(data), headers={'Content-Type':'application/json'})

if response.status_code == 200:
    print(response.json())
else:
    print(f"Request failed with status code {response.status_code}")
    print(response.reason)