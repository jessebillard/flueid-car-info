import carData from '../carData';

export default (state = {
    cars: carData,
    selectedSpeedCars: '',
    selectedWeightCar: '',
    sortedByMake: '',
    sortedBySpeed: ''
}, action) => {
    switch (action.type) {
        case 'TOPSPEED_BUTTON_SELECT':               
            // sort by top speed of all european cars, calculates topSpeed in mph not kmh
            const carsCopyForSpeed = state.cars.map(car => Object.assign({}, car))
            const euroCars = carsCopyForSpeed.filter(car => car.COO === 'Germany' || car.COO === 'Sweden')
            euroCars.sort((a, b) => b.topSpeed - a.topSpeed)
            euroCars.forEach(car => car.topSpeed = Math.round(car.topSpeed / 1.609))
            
            // finds average speed for all euro cars and creates new object with this average speed,
            // to be inserted at bottom of table.
            const combinedSpeed = euroCars.reduce((acc, val) => acc + val.topSpeed, 0)            
            const averageSpeed = Math.round(combinedSpeed / 3)
            const averageSpeedObject = {
                make: 'Average top speed for',
                COO: 'cars from Europe:',
                topSpeed: averageSpeed
            }
            euroCars.push(averageSpeedObject)
            return {
                ...state,
                selectedSpeedCars: euroCars,
                selectedWeightCar: '',
                sortedByMake: '',
                sortedBySpeed: ''
            }
        case 'WEIGHT_CAPACITY_BUTTON_SELECT':  
            // create new copy of cars with weightCapacity property, calculate/compare weightCapacity,
            // and take car with second highest weightCapacity            
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
            // alphabetize by make name
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
            // if cars aren't from USA, convert topSpeed to mph
            carsCopyBySpeed.forEach(car => {
                if (car.COO !== 'USA') {
                    car.topSpeed = Math.round(car.topSpeed / 1.609)
                }
            })  
            // sort by topSpeed   
            carsCopyBySpeed.sort((a, b) => b.topSpeed - a.topSpeed)
            // convert non USA cars back to km/h
            carsCopyBySpeed.forEach(car => {
                if (car.COO !== 'USA') {
                    car.topSpeed = Math.round(car.topSpeed * 1.609)
                }
            })        
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