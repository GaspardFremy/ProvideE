import { combineReducers } from 'redux'
import editBasket from './basket'
import addOrder from './orders'

export default combineReducers({
  editBasket,
  addOrder
})
