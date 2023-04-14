import axios from 'axios';
import {config} from '../../config';
export const FETCH_RECIPE_START = 'FETCH_RECIPE_START';
export const FETCH_RECIPE_SUCCESS = 'FETCH_RECIPE_SUCCESS';
export const FETCH_RECIPE_ERROR = 'FETCH_RECIPE_ERROR';

export const fetchRecipeStart = () => {
  return {type: FETCH_RECIPE_START};
};

export const fetchRecipeSuccess = (data) => {
  return {
    type: FETCH_RECIPE_SUCCESS,
    payload: data,
  };
};

export const fetchRecipeError = (error) => {
  return {
    type: FETCH_RECIPE_ERROR,
    payload: error,
  };
};

const myKey = config.MY_KEY;

export const getRecipe = (selectedFilter, ingredient) => (dispatch) => {
  const options = {
    method: 'GET',
    url: 'https://tasty.p.rapidapi.com/recipes/list',
    params: {
      from: '0',
      size: '20',
      tags: selectedFilter,
      q: ingredient,
    },
    headers: {
      'X-RapidAPI-Key': myKey,
      'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
    },
  };

  dispatch(fetchRecipeStart());

  axios
      .request(options)
      .then((res) => dispatch(fetchRecipeSuccess(res.data.results)))
      .catch((err) => dispatch(fetchRecipeError(err.error)));
};

