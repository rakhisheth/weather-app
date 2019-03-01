import { FETCH, SUCCESS, FAILURE } from "./actions";

const initialState = {
  //   queryString: "",
  error: null,
  result: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH:
      return {
        ...state
      };

    case SUCCESS:
      return {
        ...state
      };
    case FAILURE:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default reducer;
