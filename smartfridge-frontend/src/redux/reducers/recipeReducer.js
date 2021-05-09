import { SAVE } from '../types/recipeType';
import { SAVE_DETAILS } from '../types/recipeType';
import {STORE_FOOD} from '../types/recipeType';
import {SAVE_FAV} from '../types/recipeType';

const initialState = {
  recipeData: {}, 
  recipeDetails: {},
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