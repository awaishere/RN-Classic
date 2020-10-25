import { combineReducers } from "redux"
import { Map } from 'immutable'

export default combineReducers({
  current: users
})

const initialMap = {
  invoice_details: null
}

function users(state = Map(initialMap), action) {
  switch (action.type) {
    case 'SET_INVOICE':
      return state.set("invoice_details", action.payload);
    default:
      return state;
  }
}