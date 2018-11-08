import {
    TOPSPEED_BUTTON_SELECT,
    WEIGHT_CAPACITY_BUTTON_SELECT
} from './types'

export const topSpeedButtonSelect = () => {
    return {
        type: TOPSPEED_BUTTON_SELECT,        
    }
}

export const weightCapacityButtonSelect = () => {
    return {
        type: WEIGHT_CAPACITY_BUTTON_SELECT
    }
}