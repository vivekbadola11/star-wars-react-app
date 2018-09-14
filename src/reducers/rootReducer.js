import LoginReducer from '../reducers/loginReducer';
import PlanetReducer from '../reducers/planetReducer';
import {combineReducers} from 'redux';

const RootReducer= combineReducers({
    LoginReducer: LoginReducer,
    PlanetReducer:PlanetReducer
});

export default RootReducer;