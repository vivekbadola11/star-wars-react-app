export function getAllPlanets() {
    return fetch("https://swapi.co/api/planets/").then(function (response) {
        return response.json();
    }).then(function (response) {
        return response;
    });
}


export function getPlanet(url) {
    return fetch(url).then(function (response) {
        return response.json();
    }).then(function (response) {
        return response;
    });
}
