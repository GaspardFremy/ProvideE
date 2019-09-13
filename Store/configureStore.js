import { createStore } from 'redux';
import editBasket from './Reducers/basket'
import addOrder from './Reducers/orders'

export default createStore(editBasket)
