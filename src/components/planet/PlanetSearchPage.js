import React, { PureComponent } from 'react'
import PlanetList from './PlanetList';
import SearchControl from '../search/SearchControl';
import Header from '../common/Header';
import PaginationControl from '../common/PaginationControl';

class PlanetSearchPage extends PureComponent {
    constructor(props){
        super(props)
    }

    componentWillMount(){
        if((localStorage.getItem("isLoggedIn")=="false")){
            this.props.history.push("/");
        }
    }

    render() {
        return (
            <React.Fragment>
                <Header title={"Planet Search"} ParentProps={this.props}/>
                <SearchControl />
                <PlanetList  PlanetSearchProps={this.props}/>
                <PaginationControl/>
            </React.Fragment>
        )
    }

}

export default PlanetSearchPage;
