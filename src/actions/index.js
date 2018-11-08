import {
    SORT_BY_MAKE,
    SORT_BY_SPEED,
    TOPSPEED_BUTTON_SELECT,
    WEIGHT_CAPACITY_BUTTON_SELECT,
} from './types'

export const sortByMake = () => {
    return {
        type: SORT_BY_MAKE
    }
}

export const sortBySpeed = () => {
    return {
        type: SORT_BY_SPEED
    }
}

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