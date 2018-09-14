export function getAllPlanets() {
    return fetch("https://swapi.co/api/planets/").then(function (response) {
        debugger;
        return response.json();
    }).then(function (response) {
        return response;
    });
}


export function searchPlanets(searchvalue) {
    return fetch("https://swapi.co/api/planets/?search="+searchvalue).then(function (response) {
        debugger;
        return response.json();
    }).then(function (response) {
        return response;
    });
}


export function getPlanetData(url) {
    return fetch(url).then(function (response) {
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
