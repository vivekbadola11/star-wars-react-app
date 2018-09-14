import React, { PureComponent } from 'react'
import { Button } from "react-bootstrap";

export default class Header extends PureComponent {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="panel panel-default header">
                <div className="panel-body">
                    <div className="col-md-12 row">
                        <div className="col-md-7 right">
                            <h4>{this.props.title}</h4>
                        </div>
                        <div className="col-md-3 right">
                        <h5>Welcome {localStorage.getItem("loginId")}</h5>
                        </div>
                        <div className="col-md-2 right">
                            <Button bsStyle="success"
                                onClick={this.logoutHandler.bind(this)}>logout
                           </Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    logoutHandler = () => {
        this.props.ParentProps.history.push("/");
    }
}
