import { connect } from 'react-redux';
import React from 'react';

class CarTable extends React.Component {
    render() {          
        let cars = ''
        if (this.props.selectedSpeedCars) {
            cars = this.props.selectedSpeedCars
        } else if (this.props.selectedWeightCar) {
            cars = this.props.selectedWeightCar
        } else if (this.props.sortedByMake){
            cars = this.props.sortedByMake
        } else if (this.props.sortedBySpeed) {
            cars = this.props.sortedBySpeed
        } else {
            cars = this.props.mainCarList
        }        
        return (            
                <table id='car-table'>
                    <tbody>                       
                        {cars.map((car, index) => {
                            // conditionally renders speedMeasurement to be 'mph' if using topSpeed button
                            // otherwise use the speedMeasurement based off of country of origin
                            let speedMeasurement = ''
                            if (this.props.selectedSpeedCars) {
                                speedMeasurement = 'mph'
                            } else if (this.props.sortedBySpeed) {
                                speedMeasurement = car.COO === 'USA' ? 'mph' : 'km/h'
                            } else {
                                speedMeasurement = car.COO === 'USA' ? 'mph' : 'km/h'
                            }                            
                            return (
                                <tr key={index}>
                                    <td>{car.make} {car.model}</td>
                                    <td>{car.COO}</td>
                                    {this.props.selectedWeightCar ? <td>{car.weightCapacity} lbs weight capacity</td> : <td>{car.topSpeed} {speedMeasurement}</td> }
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