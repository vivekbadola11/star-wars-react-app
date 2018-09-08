import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import PlanetRow from './PlanetRow';

class PlanetList extends Component {
    constructor(props){
        super(props)
        this.state={
            onSearchChangeValue:''
        }
    }

  render() {
    return (
        <React.Fragment>
        <div className="table-class">
        <h5>Planets List</h5>
            <Table  striped bordered responsive condensed hover>
                <thead>
                    <tr>
                        <th>Planet Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className="table-scroll">
                    <PlanetRow PlanetListProps={this.props.PlanetSearchProps} onSearchChangeValue={this.state.onSearchChangeValue} />
                </tbody>
            </Table>
        </div>
    </React.Fragment>
    )
  }

componentWillReceiveProps(props, state) {
    this.setState({onSearchChangeValue:props.onSearchChangeValue});
}

}

export default PlanetList;
