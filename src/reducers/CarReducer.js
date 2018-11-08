import carData from '../carData'

export default (state = {
    cars: carData,
    selectedCars: ''
}, action) => {
    switch (action.type) {
        case 'TOPSPEED_BUTTON_SELECT':               
            // sort by top speed of all european cars, render in mph not kmh
            const carsCopy = state.cars.map(car => Object.assign({}, car))
            const euroCars = carsCopy.filter(car => car.COO === 'Germany' || car.COO === 'Sweden')
            euroCars.sort((a, b) => b.topSpeed - a.topSpeed)
            euroCars.forEach(car => car.topSpeed = Math.floor(car.topSpeed / 1.609))
            return {
                ...state,
                selectedCars: euroCars
            }
        case 'WEIGHT_CAPACITY_BUTTON_SELECT':                 
            return {

            }
        default:
            return state
    }
}