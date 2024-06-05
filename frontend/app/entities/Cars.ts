export default interface Cars {
  Brand: string,
  Model: string,
  Price: number,
  Acceleration: number,
  Horsepower: number,
  Type: string,
  Size: string,
  Category: string,
  Engine: string,
  Car_Name: string
}

export type CustomCar = Cars & { image: string };