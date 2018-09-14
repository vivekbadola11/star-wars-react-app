import React, { PureComponent } from 'react';
import { Pager, Pagination } from 'react-bootstrap';
import * as planetActions from '../../actions/planetActions';

import { connect } from 'react-redux';

class PaginationControl extends PureComponent {
    items = [];
    previous = "";
    next = "";
    url = "";
    isPageChanged = false;
    active = 1;
    searchValue = "";
    render() {
        return (
            <div >

                {
                    this.items.length > 0 ? <Pagination onClick={this.paginationClickHandler.bind(this)}>
                        <Pager.Item value={this.previous} disabled={this.previous ? false : true} href="#">Previous</Pager.Item>
                        {this.items}
                        <Pager.Item value={this.next} disabled={this.next ? false : true} href="#">Next</Pager.Item>
                    </Pagination> : null
                }
            </div>
        )
    }

    paginationClickHandler = (event) => {
        debugger;
        let pgValue = event.target.innerHTML;
        if (pgValue === "Previous") {
            this.url = event.target.getAttribute("value");
            this.active = this.active - 1;
        }
        else if (pgValue === "Next") {
            this.url = event.target.getAttribute("value");
            this.active = this.active + 1;
        }
        else if (parseInt(pgValue) >= 1 && parseInt(pgValue) <= 10) {
            this.searchValue = document.getElementById("searchHandlerId").value;
            if (this.searchValue) {
                this.url = "https://swapi.co/api/planets/?page=" + pgValue + "&search=" + this.searchValue;
            }
            else {
                this.url = "https://swapi.co/api/planets/?page=" + pgValue;
            }


            this.active = parseInt(pgValue);
        }
        if (this.url) {
            this.isPageChanged = true;
            this.props.getPlanetData(this.url);
        }
    }

    loadPagination = (maxNumber) => {
        debugger;
        this.items = [];
        let number;
        this.active = 1;
        maxNumber = maxNumber > 10 ? (Math.round(maxNumber / 10)) + (maxNumber % 10 != 0 ? 1 : 0) : 1;
        for (number = 1; number <= maxNumber; number++) {
            this.items.push(
                <Pagination.Item id={number + "_id"} value={number} key={number + "_id"}>{number}</Pagination.Item>
            );
        }
    }

    componentWillReceiveProps(props, state) {
        debugger;
        if (props.pageData) {
            this.next = props.pageData.next;
            this.previous = props.pageData.previous;
            if ((props.searchValue || props.searchValue == "") && props.searchValue != "NO_UPDATE") {
                this.isPageChanged = false;
            }
            if (!this.isPageChanged) {
                this.loadPagination(props.pageData.count)
            }

        }
    }
    componentDidUpdate() {
        debugger;
        var elementClass = document.getElementsByClassName("active")[0];
        if (elementClass) {
            elementClass.classList.remove("active");
        }
        var elementId = document.getElementById(this.active + "_id");
        if (elementId) {
            elementId.parentElement.classList.add("active");
        }
    }
}



const mapStateToProps = (state) => {
    debugger;
    return {
        pageData: state.PlanetReducer.planetData,
        searchValue: state.PlanetReducer.searchValue
    }
}

const mapDispatchToProps = (dispatch) => {
    debugger;
    return {
        getPlanetData: (url) => dispatch(planetActions.getPlanetData(url))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaginationControl);
