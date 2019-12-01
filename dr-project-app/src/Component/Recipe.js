import React, {Component} from 'react';
import '../App.css';
import RecipeItem from './RecipeItem';

class Recipe extends Component {
  render(){
    return this.props.myRecipes.map((recipe)=>{
            console.log(recipe);
            return <RecipeItem recipe = {recipe}></RecipeItem>
    });
  }
}

export default Recipe;