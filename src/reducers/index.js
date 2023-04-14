import {
  // FETCH_RECIPE,
  FETCH_RECIPE_START,
  FETCH_RECIPE_SUCCESS,
  FETCH_RECIPE_ERROR,
} from "../actions/index.js";

const initialState = {
  recipe: [],
  loading: false,
  error: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_RECIPE_START:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case FETCH_RECIPE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        recipe: action.payload,
      };
    case FETCH_RECIPE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
