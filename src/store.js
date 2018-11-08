import CarReducer from './reducers/CarReducer'
import { createStore } from 'redux'

function configureStore() {
    return createStore(CarReducer)
}

export const store = configureStore()