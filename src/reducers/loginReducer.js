const initialState = {
    employeeData: [{ "id": "719", "employee_name": "Vivek", "employee_salary": "123", "employee_age": "23", "profile_image": "" }]
}

export default function EmployeeReducer(state = initialState, action) {
    debugger;
    let newState = { ...state }
    switch (action.type) {
        case "GET_EMPLOYEES":
            newState.employeeData = action.value;
            return newState;
        default:
            return newState;
    }

}