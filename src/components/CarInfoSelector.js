import { connect } from 'react-redux'
import React from 'react';
import { Dropdown } from 'semantic-ui-react'
import classNames from 'classnames'
import { topSpeedButtonSelect, weightCapacityButtonSelect } from '../actions/index'

class CarInfoSelector extends React.Component {
    
    handleButtonClick = (e) => {
        
        if (e.target.className.includes('weight')) {
            this.props.weightCapacityButtonSelect()
        } else {
            this.props.topSpeedButtonSelect()
        }
    }
    
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
                            <div onClick={this.handleButtonClick} className={classNames('button', 'weight')}>
                                <p className={classNames('button-text', 'weight')}>Weight Capacity</p>
                            </div>
                        </div>
                        <div className='button-column'>
                            <div onClick={this.handleButtonClick} className={classNames('button', 'speed')}>
                                <p className={classNames('button-text', 'speed')}>Top Speed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default connect(null, { topSpeedButtonSelect, weightCapacityButtonSelect })(CarInfoSelector);