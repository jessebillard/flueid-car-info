import { connect } from 'react-redux';
import React from 'react';

class CarTable extends React.Component {
    render() {          
        const cars = this.props.selectedCars ? this.props.selectedCars : this.props.mainCarList   
        return (            
                <table id='car-table'>
                    <tbody>                       
                        {cars.map((car, index) => {
                            // conditionally renders speedMeasurement to be 'mph' if using topSpeed button
                            // otherwise use the speedMeasurement based off of country of origin
                            let speedMeasurement = ''
                            if (this.props.selectedCars) {
                                speedMeasurement = 'mph'
                            } else {
                                speedMeasurement = car.COO === 'USA' ? 'mph' : 'km/h'
                            }
                            return (
                                <tr key={index}>
                                    <td>{car.make}</td>
                                    <td>{car.COO}</td>
                                    <td>{car.topSpeed} {speedMeasurement}</td>
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
        selectedCars: state.selectedCars
    }
}

export default connect(mapStateToProps)(CarTable);