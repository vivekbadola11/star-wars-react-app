import React, { PureComponent } from 'react'
import { FormControl } from "react-bootstrap";
import * as planetActions from '../../actions/planetActions';
import { connect } from 'react-redux';

class SearchControl extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            searchValue: ''
        }
    }

       render() {
        return (
                <div className="search-control">
                    <FormControl
                        id="searchHandlerId"
                        type="text"
                        placeholder="Search Planet..."
                        value={this.state.searchValue}
                        onChange={this.onChangeHandler.bind(this)} />
                </div>
        )
    }

    onChangeHandler(e) {
        debugger;
        this.setState({ searchValue: e.target.value });
        this.props.passSearchValue(e.target.value);
    }

}


const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    debugger;
    return {
        passSearchValue: (searchValue) => dispatch(planetActions.passSearchValue(searchValue)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchControl);