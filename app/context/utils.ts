import Cars, { CustomCar } from "../entities/Cars";
import { ALL_IMAGE } from "../mockdata/car-images";


export function carDataAdapter(carList: Cars[]) {
    const carImageKeysArray = Object.keys(ALL_IMAGE)
    
    const transformed = carList.map((item) => {
        const randomCarIndexFromArray = carImageKeysArray[Math.floor(Math.random() * carImageKeysArray.length)]
        
        const imageCar = ALL_IMAGE[`${[item.Model][0]}`] === undefined ? ALL_IMAGE[randomCarIndexFromArray] : ALL_IMAGE[`${[item.Model][0]}`]
        
        return {
            ...item,
            image: imageCar
        } as CustomCar
    })

    return transformed;
}
