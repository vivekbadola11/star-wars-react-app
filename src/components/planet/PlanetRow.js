import React, { PureComponent } from 'react'
import * as planetService from '../../services/planet/planetService';
import { Button } from 'react-bootstrap';
import * as planetActions from '../../actions/planetActions';
import { connect } from 'react-redux';
import PopulationBar from '../common/PopulationBar';

class PlanetRow extends PureComponent {
    constructor(props) {
        super(props)
    }
    planetResult = [];

    componentWillMount() {
        this.loadPlanets();
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.props.planetData.results ? this.props.planetData.results.map(function (planet) {
                        return <tr key={planet.url + "-key"} id={planet.url + "-id"} url-value={planet.url}>
                            <td>
                                {planet.name}
                            </td>
                            <td>
                                <Button className="margin-left-5" bsStyle="success" button-id={planet.url + "-id"}
                                    onClick={this.infoButtonHandler.bind(this)} >Info
                                </Button>
                            </td>
                            <td>
                                {
                                    planet.population != "unknown" ? <PopulationBar population={planet.population} /> : planet.population
                                }
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
                        this.props.PlanetListProps.history.push('/PlanetInfo', this.planetResult);
                    }
                }.bind(this))
                    .catch(error => alert(error))
            }
        }


    }


    loadPlanets = () => {
        this.props.getAllPlanets();
    }

    componentWillReceiveProps(props, state) {
        if (props.searchValue != "NO_UPDATE") {
            this.onSearchChangeHandler(props.searchValue)
        }
    }

    onSearchChangeHandler = (searchValue) => {
        this.props.searchPlanets(searchValue);
    }

}

const mapStateToProps = (state) => {
    debugger;
    return {
        planetData: state.PlanetReducer.planetData,
        searchValue: state.PlanetReducer.searchValue == undefined ? "NO_UPDATE" : state.PlanetReducer.searchValue
    }
}

const mapDispatchToProps = (dispatch) => {
    debugger;
    return {
        searchPlanets: (searchValue) => dispatch(planetActions.searchPlanets(searchValue)),
        getAllPlanets: () => dispatch(planetActions.getAllPlanets()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlanetRow);

