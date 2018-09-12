import {applyMiddleware,createStore} from 'redux';
import thunk from 'redux-thunk';
import RootReducer from "../reducers/rootReducer";

export default function ConfigureStore(){
    return createStore(
        RootReducer,
        applyMiddleware(thunk)
    );
}
