import React, { Component } from 'react';
import ItemService from'./ItemService';

class DeleteRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {Title: '', Ingredients: [], Steps: [], Image: ''};
        this.addItemService = new ItemService();


        this.titleChange = this.titleChange.bind(this);
       

        this.handleSubmit = this.handleSubmit.bind(this);
      }
  
      titleChange(event) {
        this.setState({Title: event.target.value});
      }

  
      handleSubmit(event) {
        event.preventDefault();
        this.addItemService.deleteData(this.state);
      }
  
      render() {
        return (
          <div className="container">
            <form onSubmit={this.handleSubmit}>
                <h1>Delete Recipe</h1>
              <label>
                Title:
                <input type="text" value={this.state.Title} onChange={this.titleChange} className="form-control"/>
              </label><br/>
            
              
            {
              <input type="submit" value="Submit" onClick={this.handleSubmit} className="btn btn-primary"/>
            }
            </form>
        </div>
        );
      }
    }

export default DeleteRecipe;