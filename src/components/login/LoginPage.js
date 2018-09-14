import React, { PureComponent } from 'react';
import * as loginActions from '../../actions/loginActions';
import { connect } from 'react-redux';

class LoginPage extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      login: '',
      password: ''
    }
  }

  componentWillMount() {
    localStorage.setItem("isLoggedIn", false);
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

  inputChangeHandler = (controlName, e) => {
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



loginClickHandler = (e) => {
  debugger;
  if (this.state.login && this.state.password) {
    this.props.getPeople(this.state.login);
  }
  else {
    alert("Please enter Login and Password");
  }
}


authenticateLogin = (people) => {
  debugger;
  if (people.results[0].birth_year == this.state.password && this.state.login == people.results[0].name) {
    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("loginId", this.state.login);
    this.props.history.push("/PlanetSearch");
    alert("Logged in Sucessfully");
  }
  else {
    alert("Please enter correct Login and Password");
  }
}

componentWillReceiveProps(props, state) {
  if (props.people.count>0) {
      this.authenticateLogin(props.people)
  }
}

}



const mapStateToProps = (state) => {
  debugger;
  return {
    people: state.LoginReducer.peopleData
  }
}

const mapDispatchToProps = (dispatch) => {
  debugger;
  return {
    getPeople: (loginValue) => dispatch(loginActions.getPeople(loginValue)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
//export default LoginPage;
