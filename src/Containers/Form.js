import React, { Component } from "react";
import { getWeather } from "../store/productActions";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      queryString: ""
    };
  }

  handleOnChange = event => {
    this.setState = {
      queryString: event.target.value
    };
  };
  handleOnSubmit = () => {
    getWeather();
  };
  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <input
          className="location-input"
          onChange={this.handleOnChange}
          placeholder="Location"
          type="text"
          value={this.state.queryString}
        />
        <input
          className="location-submit"
          onChange={this.handleOnChange}
          placeholder="Location"
          type="submit"
          value="Submit"
        />
      </form>
    );
  }
}
export default Form;
