import React, { Component } from 'react';
import ItemService from'./ItemService';

class AddRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {Title: '', Ingredients: [], Steps: [], Image: ''};
        this.addItemService = new ItemService();
  
        this.titleChange = this.titleChange.bind(this);
        this.imageChange = this.imageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
  
      titleChange(event) {
        this.setState({Title: event.target.value});
      }

      imageChange(event){
          this.setState({Image: event.target.value});
      }
  
      handleSubmit(event) {
        event.preventDefault();
        this.addItemService.sendData(this.state.Title, this.state.Image);
      }
  
      render() {
        return (
          <div className="container">
            <form onSubmit={this.handleSubmit}>
                <h1>Add Recipe</h1>
              <label>
                Title:
                <input type="text" value={this.state.Title} onChange={this.titleChange} className="form-control"/>
              </label><br/>
              <label>
                Image URL:
                <input type="text" value={this.state.Image} onChange={this.imageChange} className="form-control"/>
              </label><br/>
              <input type="submit" value="Submit" className="btn btn-primary"/>
            </form>
        </div>
        );
      }
    }

export default AddRecipe;