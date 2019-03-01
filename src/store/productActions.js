import API_KEY from "../Constants/api-key";
import {
  fetchWeatherBegin,
  fetchWeatherSuccess,
  fetchWeatherFailure
} from "./actions";

export function getWeather() {
  console.log("hello");
  return dispatch => {
    dispatch(fetchWeatherBegin());
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=London&APPID=${API_KEY}`
    )
      .then(handleErrors)
      .then(result => console.log(result.json()))
      .then(json => {
        console.log(json);
        dispatch(fetchWeatherSuccess(json));
      })
      .catch(error => fetchWeatherFailure(error));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
