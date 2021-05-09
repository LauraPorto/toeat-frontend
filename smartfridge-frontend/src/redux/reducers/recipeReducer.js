import { SEARCH_FOOD } from '../types/recipeType';
import { SAVE } from '../types/recipeType';
import { SAVE_DETAILS } from '../types/recipeType';
import {STORE_FOOD} from '../types/recipeType';
import {SAVE_FAV} from '../types/recipeType';

const initialState = {
  recipeData: {}, 
  recipeDetails: {},
  foodInfo: {}, 
  myIngredients: [], 
  favorites: {}
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE:
      return {
        ...state,
        recipeData: action.payload
      }
    case SAVE_DETAILS:
      return{
        ...state,
        recipeDetails: action.payload
      }
    case SEARCH_FOOD:
      return {
        ...state,
        foodInfo: action.payload
      }
    case STORE_FOOD:
      return {
        ...state,
        myIngredients: action.payload
      }
    case SAVE_FAV:
      return {
        ...state,
        favorites: action.payload
      }
    default:
      return state;
  };
};

export default recipeReducer;