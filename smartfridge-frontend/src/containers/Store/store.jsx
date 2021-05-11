import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

import Search from '../../components/Search/search';

import kitchen from '../../assets/kitchen.jpeg';

import { SAVE } from '../../redux/types/recipeType';
import { connect } from 'react-redux';

const apiKey = '?apiKey=d6e877dd55e74b919c1cf042e3e465bb';
const query = '&ingredients=';
const url = 'https://spoonacular.com/cdn/ingredients_{250x250}/';


const Store = (props) => {

    const history = useHistory();
    const ingredients = props.myIngredients.myIngredients;

    useEffect(() => {

        let token = props.user.token;

        if(token === ''){
            history.push('/')
        }

    }, [])

    useEffect(() => {
        
    })

    //Hooks para hacer la lista de ingredientes 
    const [list, setList] = useState({
        myIngredients: []
    });
 

    const selectIngredient = ({ingredient}) => {

        const mapIngredients = ingredients.filter(ingredient => {
            return ingredient.name, ingredient.id
        })


        const listRecipe = list.myIngredients.push(ingredient.name);

    };


    
    const getRecipes = async () => {
        const recipeData = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients${apiKey}${query}${list.myIngredients}`);

        props.dispatch({type: SAVE, payload: recipeData.data});

        return setTimeout(() => {
            history.push('/result');
        }, 500);

    };


    return (
        <div className="main-store">
            <div className="empty-div"></div>
            <div className="body-store">
                <div className="store-fridge">
                    <img src={kitchen} style={{maxWidth: '100%', width: '35em', height: '38em'}}></img>
                    <div className="fridge-menu">
                        <div className="fridge-menu-msn">
                            <p>Select the ingredients you like most and let us find you your next favorite dish</p>
                        </div>
                        <div className="search-store-container">
                            <Search/>
                        </div>
                        <button className="button-recipes" onClick={() => getRecipes()}><p>Get Recipes</p></button>
                    </div>
                </div>
                <div className="my-products-store">
                    <div className="selected-ingredients">
                    </div>
                    
                    <div className="ingredient-container">
                        {
                            ingredients.map(ingredient => 
                                <div >
                                    <div className = "map-ingredient" onClick={() => selectIngredient({ingredient})}>
                                        {ingredient.name}
                                    </div>
                                    <img className="map-image" src={`https://spoonacular.com/cdn/ingredients_{100x100}/${ingredient.image}`}/>
                                </div>
                            )
                        }
                    </div>
                </div>
                         
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myIngredients: state.recipeReducer,
        user: state.userReducer
    }
}


export default connect(mapStateToProps)(Store);
