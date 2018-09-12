import EmployeeReducer from '../reducers/employeeReducer';
import {combineReducers} from 'redux';

const RootReducer= combineReducers({
    EmployeeReducer: EmployeeReducer
});

export default RootReducer;