import requests
import json

url = 'http://localhost:8000/api/cars/'

data = {

       "messages" : [{"role": "system", "content":""}, {"role": "user",
                   "content": "My neighbour has bought a Dodge Charger. Show me all the cars that are faster than his."}
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