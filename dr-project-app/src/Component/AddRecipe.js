import React, { Component } from 'react';
import ItemService from'./ItemService';

class AddRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {Title: '', Ingredients: [ 'poop', 'poop2'], Steps: [], Image: ''};
        this.addItemService = new ItemService();

        this.ingredientsArray = [];

        this.titleChange = this.titleChange.bind(this);
        this.imageChange = this.imageChange.bind(this);

        this.ingredientChange = this.ingredientChange.bind(this);
        this.ingredientSubmit = this.ingredientSubmit.bind(this);
        this.ingredientsRemove = this.ingredientsRemove.bind(this);

        this.stepsChange = this.stepsChange.bind(this);
        this.stepsSubmit = this.stepsSubmit.bind(this);
        this.stepsRemove = this.stepsRemove.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
      }
  
      titleChange(event) {
        this.setState({Title: event.target.value});
      }

      imageChange(event){
          this.setState({Image: event.target.value});
      }

      ingredientChange(event){
        //this.setState({this.ingredientsArray})
        this.ingredientsArray.pop();
        this.ingredientsArray.push(event.target.value);
        //this.setState({Ingredients: this.ingredientsArray});
      }

      ingredientSubmit(event){
        this.ingredientsArray.push(event.target.value);
        //this.setState({Ingredients: this.ingredientsArray});
      }

      ingredientsRemove(event){
        this.ingredientsArray.pop();
      }

      stepsChange(event){
        this.stepsArray.pop();
        this.stepsArray.push(event.target.value);
        this.setState({Steps: this.stepsArray});
      }

      stepsSubmit(event){
        this.stepsArray.push(event.target.value);
        this.setState({Steps: this.stepsArray});
      }

      stepsRemove(event){
        this.stepsArray.pop();
      }
  
      handleSubmit(event) {
        event.preventDefault();
        this.addItemService.sendData(this.state);
      }
  
      render() {
        return (
          <div className="container">
            
                <h1>Add Recipe</h1>
              <label>
                Title:
                <input type="text" value={this.state.Title} onChange={this.titleChange} className="form-control"/>
              </label><br/>
              <label>
                Image URL:
                <input type="text" value={this.state.Image} onChange={this.imageChange} className="form-control"/>
              </label><br/>
              <label>
                Ingredients:
                <br/>{this.ingredientsArray.map((item, index) => (
                <var key={index} item={item} />
                ))}<br/>

                <input type="text" defaultValue="New Ingredient"  className="form-control"/>
                <input type="submit" value="Add Ingredient" onClick={this.ingredientSubmit} className="btn btn-primary"/>
              </label><br/>
              
            {/*<form onSubmit={this.handleSubmit}>
              <input type="submit" value="Submit" onClick={this.handleSubmit} className="btn btn-primary"/>
              </form>*/}
          
        </div>
        );
      }
    }

export default AddRecipe;