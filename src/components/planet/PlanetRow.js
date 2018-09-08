import React, { Component } from 'react'
import * as planetService from '../../services/planet/planetService';
import { Button } from 'react-bootstrap';

class PlanetRow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            planetData: []
        }
    }
    planetResult = [];

    componentWillMount() {
        this.loadPlanets();
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.state.planetData.length > 0 ? this.state.planetData.map(function (planet) {
                        return <tr key={planet.url+"-key"} id={planet.url+"-id"} url-value={planet.url}>
                            <td>{planet.name}</td>
                            <td>
                                <Button className="margin-left-5" bsStyle="success" button-id={planet.url+"-id"}
                                    onClick={this.infoButtonHandler.bind(this)} >Info
                                </Button>
                            </td>
                        </tr>
                    }.bind(this))
                                                    : null
                }
            </React.Fragment>
        )
    }


    infoButtonHandler = (event) => {
        let url;
        let button_id = event.target.getAttribute("button-id");
        if (button_id) {
            let dataRow = document.getElementById(button_id);
            debugger;
            if (dataRow) {
                url = dataRow.getAttribute("url-value");
                planetService.getPlanet(url).then(function (planet) {
                    if (planet) {
                        this.planetResult = planet;
                        console.log(this.planetResult);
                        debugger;
                        this.props.PlanetListProps.history.push('/PlanetInfo',this.planetResult);
                    }
                }.bind(this))
                    .catch(error => alert(error))
            }
        }


    }

 
    loadPlanets = () => {
        planetService.getAllPlanets().then(function (planets) {
            debugger;
            this.planetResult = planets.results;
            console.log(planets.results);
            this.setState((pervState, props) => ({
                planetData: this.planetResult
            }))
        }.bind(this))
            .catch(error => alert(error))
    }

    componentWillReceiveProps(props, state) {
        this.onSearchChangeHandler(props.onSearchChangeValue)
    }

    onSearchChangeHandler = (value) => {
        debugger;
        let filteredPlanets = this.planetResult.filter(planet => {
            if (planet.name.toLowerCase().includes(value.toLowerCase())) {
                return planet;
            }
            else
                return false;
        })
        this.setState({ planetData: filteredPlanets })
    }

}

export default PlanetRow;

