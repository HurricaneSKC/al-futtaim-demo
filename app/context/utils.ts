import Cars, { CustomCar } from "../entities/Cars";
import { ALL_IMAGE } from "../mockdata/car-images";

export function carDataAdapter(carList: Cars[]) {
    const transformed = carList.map((item) => {
        return {
            ...item,
            image: ALL_IMAGE[Math.floor(Math.random() * ALL_IMAGE.length)]
        } as CustomCar
    })

    return transformed;
}