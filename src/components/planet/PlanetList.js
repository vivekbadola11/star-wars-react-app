import React, { PureComponent } from 'react'
import { Table } from 'react-bootstrap';
import PlanetRow from './PlanetRow';

class PlanetList extends PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <React.Fragment>
                <div className="table-class">
                    <h5>Planets List</h5>
                    <Table striped bordered responsive condensed hover>
                        <thead>
                            <tr>
                                <th>Planet Name</th>
                                <th>Action</th>
                                <th>Population</th>
                            </tr>
                        </thead>
                        <tbody >
                            <PlanetRow PlanetListProps={this.props.PlanetSearchProps} />
                        </tbody>
                    </Table>
                </div>
            </React.Fragment>
        )
    }

}

export default PlanetList;
