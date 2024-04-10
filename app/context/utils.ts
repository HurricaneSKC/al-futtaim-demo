import Cars, { CustomCar } from "../entities/Cars";
import { ALL_IMAGE } from "../mockdata/car-images";

export function carDataAdapter(carList: Cars[]) {
    console.log("carList",carList);
    console.log("All images",ALL_IMAGE);
    
    
    const transformed = carList.map((item) => {
        return {
            ...item,
            image: ALL_IMAGE[Math.floor(Math.random() * ALL_IMAGE.length)]
        } as CustomCar
    })

    console.log("transformed", transformed);
    

    return transformed;
}