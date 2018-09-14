const initialState = {
    peopleData: []
}

export default function LoginReducer(state = initialState, action) {
    debugger;
    let newState = { ...state }
    switch (action.type) {
        case "GET_PEOPLE":
            newState.peopleData = action.value;
            return newState;
        default:
            return newState;
    }

}