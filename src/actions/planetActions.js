import * as planetService from '../services/planet/planetService';


export function getAllPlanetsResponse(planets) {
    return { type: "GET_ALL_PLANETS",value: planets }
}

export function getPlanetDataResponse(planets) {
    return { type: "GET_PLANET_DATA",value: planets }
}

export function searchPlanetsResponse(planets) {
    return { type: "SEARCH_PLANETS",value: planets }
}

export function passSearchValue(searchValue) {
    return { type: "SEARCH_VALUE",value: searchValue }
}



export function getAllPlanets() {
    return dispatch=> {
        return planetService.getAllPlanets().then((planets)=> {
              dispatch(getAllPlanetsResponse(planets));
        }).catch(error => { alert(error) })
    }
}

export function getPlanetData(url) {
    return dispatch=> {
        return planetService.getPlanetData(url).then((planets)=> {
              dispatch(getPlanetDataResponse(planets));
        }).catch(error => { alert(error) })
    }
}

export function searchPlanets(searchValue) {
    return dispatch=> {
        return planetService.searchPlanets(searchValue).then((planets)=> {
              dispatch(searchPlanetsResponse(planets));
        }).catch(error => { alert(error) })
    }
}

