import CarInfoSelector from './CarInfoSelector';
import CarTable from './CarTable';
import React from 'react';

const CarInfoContainer = () => {
    return (
        <div className='car-info-container'>
            <div className='car-info-column'>
                <CarInfoSelector />
            </div>
            <div className='car-info-column'>
                <CarTable />
            </div>
        </div>
    )
};

export default CarInfoContainer;