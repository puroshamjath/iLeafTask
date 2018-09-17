import {combineReducers,applyMiddleware,createStore} from 'redux';
import thunk from 'redux-thunk';
import baseReducer from './reducers/baseReducer';

const AppReducers = combineReducers({
    base : baseReducer
});

const rootReducer = (state,action) => {
    return AppReducers(state,action)
}

export default createStore(rootReducer,applyMiddleware(thunk))