const initialState = {
    planetData: []
}

export default function PlanetReducer(state = initialState, action) {
    let newState = { ...state }
    debugger;
    switch (action.type) {
        case "GET_ALL_PLANETS":
            newState.planetData = action.value;
            return newState;
        case "GET_PLANET_DATA":
            newState.planetData = action.value;
            return newState;
        case "SEARCH_PLANETS":
            newState.planetData = action.value;
            newState.searchValue = "NO_UPDATE";
            return newState;
        case "SEARCH_VALUE":
            newState.searchValue = action.value;
            return newState;
        default:
            return newState;
    }

}