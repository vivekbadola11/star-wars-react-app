import React, { Component } from 'react'
import PlanetList from './PlanetList';
import SearchControl from '../search/SearchControl';
import Header from '../common/Header';

class PlanetSearchPage extends Component {
    constructor(props){
        super(props)
        this.state={
            onSearchChangeValue:''
        }
    }

    componentWillMount(){
        debugger;
        if((localStorage.getItem("isLoggedIn")=="false")){
            this.props.history.push("/");
        }
    }

    render() {
        return (
            <React.Fragment>
                <Header title={"Planet Search"} ParentProps={this.props}/>
                <SearchControl  onSearchChangeHandler={this.onSearchChangeHandler.bind(this)}/>
                <PlanetList  PlanetSearchProps={this.props} onSearchChangeValue={this.state.onSearchChangeValue} />
            </React.Fragment>
        )
    }

    onSearchChangeHandler=(value)=>{
        this.setState({onSearchChangeValue:value});
    }
}

export default PlanetSearchPage;
