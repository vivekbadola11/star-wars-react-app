import React, { Component } from 'react';
import * as peopleService from '../../services/people/peopleService';

class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      login: '',
      password: ''
    }
  }

  componentWillMount(){
    localStorage.setItem("isLoggedIn",false);
    localStorage.removeItem("loginId");
  }

  render() {
    return (
      <div className="container-login100">
        <div className="wrap-login100">

          <div className="login100-form-title">
            <h1>Star Wars</h1>
          </div>

          <div className="wrap-input100">
            <input className="input100"
              type="text"
              name="login"
              value={this.state.login}
              placeholder="Login"
              onChange={this.inputChangeHandler.bind(this, "login")}
            />
          </div>

          <div className="wrap-input100">
            <input className="input100"
              type="password"
              name="pass"
              value={this.state.password}
              placeholder="Password"
              onChange={this.inputChangeHandler.bind(this, "password")}
            />
          </div>

          <div className="container-login100-form-btn">
            <button className="login100-form-btn"
              onClick={this.loginClickHandler.bind(this)}
            >
              Login
				    </button>
          </div>

        </div>
      </div>
    )
  }
  loginClickHandler = (e) => {
    debugger;
    if (this.state.login && this.state.password) {
      peopleService.getPeople(this.state.login).then(function (people) {
        debugger;
        if (people.count==1) {
          if (people.results[0].birth_year == this.state.password) {
            localStorage.setItem("isLoggedIn",true);
            localStorage.setItem("loginId",this.state.login);

            this.props.history.push("/PlanetSearch");
          }
          else{
            alert("Please enter correct Login and Password");
          }
        } else {
          alert("Please enter correct Login and Password");
        }
      }.bind(this))
        .catch(error => alert(error))

    }
    else {
      alert("Please enter Login and Password");
    }
  }

  inputChangeHandler = (controlName,e) => {
    switch (controlName) {
      case "login":
        this.setState({ login: e.target.value });
        break;
      case "password":
        this.setState({ password: e.target.value });
        break;
      default:
        break;
    }
  }

}

export default LoginPage;
