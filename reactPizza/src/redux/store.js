import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import pizza from './pizzaReducer';
import filter from './filterReducer';
import cart from './cartReducer';
import thunkMiddleware from "redux-thunk";


const reducers = combineReducers({
    pizza,
    filter,
    cart
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));


window.store = store;

export default store;

