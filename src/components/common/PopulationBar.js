import React, { PureComponent } from 'react'

export default class PopulationBar extends PureComponent {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div id="myProgress">
                <div id="myBar" name={"myBar_" + this.props.population}>
                    {this.props.population}
                </div>
            </div>
        )
    }

    componentDidMount() {
        debugger;
        let elem = document.getElementsByName("myBar_" + this.props.population)[0];
        let width = (this.props.population / 10000000)
        if (width > 350) {
            width = 350;
        }
        elem.style.width = width + 'px';
    }
}

