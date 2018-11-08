import classNames from 'classnames'
import { connect } from 'react-redux'
import { Dropdown } from 'semantic-ui-react'
import React from 'react';
import { sortByMake, sortBySpeed, topSpeedButtonSelect, weightCapacityButtonSelect } from '../actions/index'

class CarInfoSelector extends React.Component {        

    handleButtonClick = (e) => {        
        if (e.target.className.includes('weight')) {
            this.props.weightCapacityButtonSelect()
        } else {
            this.props.topSpeedButtonSelect()
        }
    }

    handleDropdownSelection = (e) => {
        if (e) {
            if (e.target.innerText === 'Top Speed') {
                this.props.sortBySpeed()
            } else if (e.target.innerText === 'Make') {
                this.props.sortByMake()
            }
        }
    }
    
    render() {
        const dropdownOptions = [
            {
                text: 'Top Speed',
                value: 'Top Speed'
            },
            {
                text: 'Make',
                value: 'Make'
            }
        ]
        return (
            <div className='car-info-selector-container'>
                <div className='list-sort-column'>
                    <p style={{textAlign: 'center'}}>List cars sorted by:</p>
                </div>
                <div className='car-selection-column'>
                    <Dropdown onClose={this.handleDropdownSelection} className='dropdown' placeholder='Sort by...' fluid selection options={dropdownOptions} />                        
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

export default connect(null, { sortByMake, sortBySpeed, topSpeedButtonSelect, weightCapacityButtonSelect })(CarInfoSelector);