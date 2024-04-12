import Cars, { CustomCar } from "../entities/Cars";
import { ALL_IMAGE } from "../mockdata/car-images";

export function carDataAdapter(carList: Cars[]) {
    const transformed = carList.map((item) => {
        console.log('item Model', ALL_IMAGE[`${[item.Model][0]}`])
        
        const imageCar = ALL_IMAGE[`${[item.Model][0]}`] === undefined ? ALL_IMAGE["XC91"] : ALL_IMAGE[`${[item.Model][0]}`]
        
        return {
            ...item,
            image: imageCar
        } as CustomCar
    })

    return transformed;
}
