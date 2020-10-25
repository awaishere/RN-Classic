import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from 'app/store/reducers'
import thunk from "redux-thunk"
import Errorhandler from 'app/utills/middlewares/Errorhandler'
const middlewares = [Errorhandler, thunk]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)))

export default store