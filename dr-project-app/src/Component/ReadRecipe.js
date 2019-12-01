import React, { Component } from 'react';
import '../App.css';
import Recipe from './Recipe.js';
import axios from 'axios';
import ItemService from'./ItemService';

class ReadRecipe extends Component {

    ItemService = new ItemService();
    state = {
        recipes: [
  
        ]

    };

    componentDidMount(){
       
            this.setState({recipes: ItemService.getData})
      
    }

    render() {
        return (
            <div>
                <h2>Read Component</h2>
                <Recipe myRecipes = {this.state.recipes}></Recipe>
            </div>
        );
    }
}

export default ReadRecipe;