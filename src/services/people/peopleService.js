export function getPeople(name) {
    if (!name) {
        return false;
    }
    return fetch("https://swapi.co/api/people/?search=" + name).then(function (response) {
        return response.json();
    }).then(function (response) {
        return response;
    });
}

