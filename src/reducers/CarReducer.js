import carData from '../carData'

export default (state = {
    cars: carData,
    selectedSpeedCars: '',
    selectedWeightCar: ''
}, action) => {
    switch (action.type) {
        case 'TOPSPEED_BUTTON_SELECT':               
            // sort by top speed of all european cars, render in mph not kmh
            const carsCopyForSpeed = state.cars.map(car => Object.assign({}, car))
            const euroCars = carsCopyForSpeed.filter(car => car.COO === 'Germany' || car.COO === 'Sweden')
            euroCars.sort((a, b) => b.topSpeed - a.topSpeed)
            euroCars.forEach(car => car.topSpeed = Math.floor(car.topSpeed / 1.609))
            return {
                ...state,
                selectedSpeedCars: euroCars,
                selectedWeightCar: ''
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
        // debugger
            return {
                ...state,
                selectedWeightCar: [carsCopyForWeight[1]],
                selectedSpeedCars: ''
            }
        default:
            return state
    }
}