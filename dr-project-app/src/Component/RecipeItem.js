import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import '../App.css';


class RecipeItem extends Component {
    render() {
        return (
            <Card>
                <div>

                    <Card.Title>{this.props.recipe.Title}</Card.Title>
                    <img src={this.props.recipe.Image} height="500" width="350" />
                    <Card.Text>{this.props.recipe.Ingredients}</Card.Text>
                    <Card.Text>{this.props.recipe.Steps}</Card.Text>

                </div>
            </Card>
        );
    }
}

export default RecipeItem;
