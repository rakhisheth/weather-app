export const FETCH = "FETCH";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

export const fetchWeatherBegin = () => ({
  type: FETCH // initial call for onClick Submit
});

export const fetchWeatherSuccess = weather => ({
  type: SUCCESS,
  payload: { weather }
});
export const fetchWeatherFailure = error => ({
  type: FAILURE,
  payload: { error }
});
