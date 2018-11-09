import { connect } from 'react-redux';
import React from 'react';

class CarTable extends React.Component {
    render() {    
        const { selectedSpeedCars, selectedWeightCar, sortedByMake, sortedBySpeed, mainCarList} = this.props      
        // determine which list of cars to assign to variable cars
        // redux reducer ensures only one list will be truthy
        let cars = ''
        if (selectedSpeedCars) {
            cars = selectedSpeedCars
        } else if (selectedWeightCar) {
            cars = selectedWeightCar
        } else if (sortedByMake){
            cars = sortedByMake
        } else if (sortedBySpeed) {
            cars = sortedBySpeed
        } else {
            cars = mainCarList
        }        
        return (            
                <table id='car-table'>
                    <tbody>                       
                        {cars.map((car, index) => {
                            // if using topSpeed button, assigns speedMeasurement to be 'mph'
                            // if sorting by speed or using the main list, assigns speedMeasurement based of county of origin                            
                            let speedMeasurement = ''
                            if (selectedSpeedCars) {
                                speedMeasurement = 'mph'
                            } else if (sortedBySpeed) {
                                speedMeasurement = car.COO === 'USA' ? 'mph' : 'km/h'
                            } else {
                                speedMeasurement = car.COO === 'USA' ? 'mph' : 'km/h'
                            }                            
                            return (
                                <tr key={index}>
                                    <td>{car.make} {car.model}</td>
                                    <td>{car.COO}</td>
                                    {/* if sorting by weight, renders <td></td> for weight, otherwise every other sort/selction case will show speed */}
                                    {selectedWeightCar ? <td>{car.weightCapacity} lbs weight capacity</td> : <td>{car.topSpeed} {speedMeasurement}</td> }
                                </tr>
                            )
                        })}
                    </tbody>     
                </table>            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mainCarList: state.cars,
        selectedSpeedCars: state.selectedSpeedCars,
        selectedWeightCar: state.selectedWeightCar,
        sortedByMake: state.sortedByMake,
        sortedBySpeed: state.sortedBySpeed
    }
}

export default connect(mapStateToProps)(CarTable);