import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
// import { getWeather } from "./store/productActions";
import Form from "./Containers/Form";
import Title from "./Components/Title";
// import LocationForm from "./Components/Input";

class App extends Component {
  constructor() {
    super();
    this.state = {
      queryString: ""
    };
  }

  onChange = event => this.setState({ queryString: event.target.value });

  render() {
    return (
      <div className="App">
        <Title title="Weather App" />
        <Form />
        {/* <form onSubmit={getWeather()}>
          <LocationForm
            className="location-input"
            onChange={this.onChange}
            placeholder="Location"
            type="text"
            value={this.state.queryString}
          />
          <LocationForm
            className="location-submit"
            onClick={this.onChange}
            placeholder="Location"
            type="submit"
            value="Submit"
          />
        </form> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    queryStr: state.queryString,
    res: state.result
  };
};
// const mapDispatchToProps = dispatch => {
//   return {
//     onSubmit: dispatch(fetchWeather())
//   };
// };

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(App);
