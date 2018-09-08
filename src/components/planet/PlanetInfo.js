import React, { Component } from 'react';
import { FormGroup, Button, FormControl, ControlLabel } from "react-bootstrap";
import Header from '../common/Header';

export default class PlanetInfo extends Component {
  constructor(props, context) {
    super(props, context);
  }
  stateData = {};
  componentWillMount() {
    debugger;
    let location = this.props.history.location;
    if (localStorage.getItem("isLoggedIn")=="true" && location.state) {
      this.stateData = location.state;
    }
    else {
      this.props.history.push("/PlanetSearch");
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header title={"Planet Information"} ParentProps={this.props}/>
        <form className="col-md-4">
          <FormGroup controlId="formBasicText">
            <ControlLabel><h5>Name</h5></ControlLabel>
            <FormControl className="margin-bottom-15"
              type="text"
              value={this.stateData.name}
              disabled
            />
            <ControlLabel><h5>Rotation Period</h5></ControlLabel>
            <FormControl className="margin-bottom-15"
              type="text"
              value={this.stateData.rotation_period}
              disabled
            />
            <ControlLabel><h5>Orbital Period</h5></ControlLabel>
            <FormControl className="margin-bottom-15"
              type="text"
              value={this.stateData.orbital_period}
              disabled
            />
            <ControlLabel><h5>Diameter</h5></ControlLabel>
            <FormControl className="margin-bottom-15"
              type="text"
              value={this.stateData.diameter}
              disabled
            />

            <ControlLabel><h5>Climate</h5></ControlLabel>
            <FormControl className="margin-bottom-15"
              type="text"
              value={this.stateData.climate}
              disabled
            />
          </FormGroup>

          <Button bsStyle="success"
            onClick={this.backHandler.bind(this)}>Back
        </Button>

        </form>
      </React.Fragment>
    )
  }


  backHandler = () => {
    this.props.history.push("/PlanetSearch");
  }
}
