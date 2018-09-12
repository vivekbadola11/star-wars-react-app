import * as employeeService from '../services/employeeService';


export function getAllEmployeesResponse(employees) {
    debugger;
    return { type: "GET_EMPLOYEES",value: employees }
}

export function addEmployeeResponse(employee) {
    return { type: "ADD_EMPLOYEE", value: employee }
}

export function editEmployeeResponse(employee) {
    return { type: "UPDATE_EMPLOYEES", employee }
}

export function deleteEmployeeResponse(isDeleted) {
    return { type: "DELETE_EMPLOYEES", isDeleted }
}



export function getAllEmployees() {
    debugger;
    return dispatch=> {
        debugger;
        return employeeService.getAllEmployees().then((employees)=> {
            debugger;
              dispatch(getAllEmployeesResponse(employees));
        }).catch(error => { alert(error) })
    }
}


export function deleteEmployee(employeeId){
    return function(dispatch){
        return employeeService.deleteEmployee(employeeId)
        .then(response => {
            if (response) {
                debugger;
                dispatch(deleteEmployeeResponse(true));
                dispatch(getAllEmployees()); ;
                alert("Data Deleted Succesfully");
                document.getElementById("searchHandlerId").value = "";
            }
        })
        .catch(error => alert(error))        
    }
}
