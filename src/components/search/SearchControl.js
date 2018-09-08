import React, { Component } from 'react'
import { FormControl } from "react-bootstrap";

export default class SearchControl extends Component {
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
        this.setState({ searchValue: e.target.value });
        this.props.onSearchChangeHandler(e.target.value)
    }


}
