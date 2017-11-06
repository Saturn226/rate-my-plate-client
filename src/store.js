import{
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux'

import thunk from 'redux-thunk'
import plates from './reducers/plates'


const reducers = combineReducers({
    plates: plates
})

const middleware = [thunk]

export default createStore(
    reducers,
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)