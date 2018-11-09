import carData from '../carData'

export default (state = {
    cars: carData,
    selectedSpeedCars: '',
    selectedWeightCar: '',
    sortedByMake: '',
    sortedBySpeed: ''
}, action) => {
    switch (action.type) {
        case 'TOPSPEED_BUTTON_SELECT':               
            // sort by top speed of all european cars, render in mph not kmh
            const carsCopyForSpeed = state.cars.map(car => Object.assign({}, car))
            const euroCars = carsCopyForSpeed.filter(car => car.COO === 'Germany' || car.COO === 'Sweden')
            euroCars.sort((a, b) => b.topSpeed - a.topSpeed)
            euroCars.forEach(car => car.topSpeed = Math.round(car.topSpeed / 1.609))
            return {
                ...state,
                selectedSpeedCars: euroCars,
                selectedWeightCar: '',
                sortedByMake: '',
                sortedBySpeed: ''
            }
        case 'WEIGHT_CAPACITY_BUTTON_SELECT':                 
        const carsCopyForWeight = state.cars.map(car => Object.assign({weightCapacity: ''}, car))         
        carsCopyForWeight.forEach(car => {
            if (car.type === 'car') {
                car.weightCapacity = (car.passengerCapacity * 275) + (car.trunkSquareFeet * 40)
            } else {
                car.weightCapacity = (car.passengerCapacity * 300) + (car.cargoSquareFeet * 50)
            }
        })
        carsCopyForWeight.sort((a, b) => b.weightCapacity - a.weightCapacity)        
            return {
                ...state,
                selectedWeightCar: [carsCopyForWeight[1]],
                selectedSpeedCars: '',
                sortedByMake: '',
                sortedBySpeed: ''
            }
        case 'SORT_BY_MAKE':
            const carsCopyByMake = state.cars.map(car => Object.assign({}, car))
            carsCopyByMake.sort((a, b) => {
                if (a.make < b.make) {
                    return -1
                } else if (a.make > b.make) {
                    return 1
                } else return 0
            })            
            return {
                ...state,
                selectedWeightCar: '',
                selectedSpeedCars: '',
                sortedByMake: carsCopyByMake,
                sortedBySpeed: ''
            }
        case 'SORT_BY_SPEED':
        const carsCopyBySpeed = state.cars.map(car => Object.assign({}, car))
        carsCopyBySpeed.forEach(car => {
            if (car.COO !== 'USA') {
                car.topSpeed = Math.round(car.topSpeed / 1.609)
            }
        })     
        carsCopyBySpeed.sort((a, b) => b.topSpeed - a.topSpeed)
        carsCopyBySpeed.forEach(car => {
            if (car.COO !== 'USA') {
                car.topSpeed = Math.round(car.topSpeed * 1.609)
            }
        })
        // carsCopyBySpeed.sort((a, b) => {
        //     if (a.COO !== 'USA' && b.COO !== 'USA') {
        //         const bConverted = Math.floor(b.topSpeed / 1.609)
        //         const aConverted = Math.floor(a.topSpeed / 1.609)
        //         // return bConverted - aConverted
        //         if (bConverted > aConverted) {
        //             return b.topSpeed - a.topSpeed
        //         }
        //     } else if (a.COO !== 'USA') {
        //         const aConverted = Math.floor(a.topSpeed / 1.609)
        //         return b.topSpeed - aConverted
        //         if (b.topSpeed > aConverted) {
        //             return b.topSpeed - a.topSpeed
        //         }
        //     } else if (b.COO !== 'USA') {
        //         const bConverted = Math.floor(a.topSpeed / 1.609)
        //         return bConverted - a.topSpeed
        //         if (bConverted > a.topSpeed) {
        //             return b.topSpeed - a.topSpeed
        //         }
        //     } 
        // })            
        // debugger         
            return {
                ...state,
                selectedWeightCar: '',
                selectedSpeedCars: '',
                sortedByMake: '',
                sortedBySpeed: carsCopyBySpeed
            }
        default:
            return state
    }
}