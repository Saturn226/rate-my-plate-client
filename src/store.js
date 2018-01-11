import{
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux'

import thunk from 'redux-thunk'
import plates from './reducers/plates'
import plateFormData from './reducers/plateFormData'


const reducers = combineReducers({
    plates: plates,
    plateFormData,
})

const middleware = [thunk]

export default createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middleware)
)