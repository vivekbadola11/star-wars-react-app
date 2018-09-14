import * as peopleService from '../services/people/peopleService';

export function getPeopleResponse(people) {
    debugger;
    return { type: "GET_PEOPLE", value: people }
}




export function getPeople(loginValue) {
    debugger;
    return dispatch => {
        debugger;
        return peopleService.getPeople(loginValue).then((people) => {
            debugger;
            if (people.count == 1) {
                dispatch(getPeopleResponse(people));
            } else {
                alert("Please enter correct Login and Password");
            }

        }).catch(error => { alert(error) })
    }
}
