import React from 'react';
import { Dropdown } from 'semantic-ui-react'

class CarInfoSelector extends React.Component {
    render() {
        return (
            <div className='car-info-selector-container'>
                <div className='list-sort-column'>
                    <p style={{textAlign: 'center'}}>List cars sorted by:</p>
                </div>
                <div className='car-selection-column'>
                    <Dropdown className='dropdown' placeholder='select sort' fluid selection>
                        <Dropdown.Menu>
                            <Dropdown.Item>Top Speed</Dropdown.Item>
                            <Dropdown.Item>Make</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <div className='button-container'>
                        <div className='button-column'>
                            <div className='button'>
                                <p className='button-text'>Weight Capacity</p>
                            </div>
                        </div>
                        <div className='button-column'>
                            <div className='button'>
                                <p className='button-text'>Top Speed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default CarInfoSelector;