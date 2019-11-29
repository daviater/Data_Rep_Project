import React, {Component} from 'react';
import './App.css';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import AddRecipe from './Component/AddRecipe';
import DeleteRecipe from './Component/DeleteRecipe';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
      <div className="App">
      <NavBar bg="primary" varient="dark">
        <Nav className="mr-auto">
          <Nav.link href="/">Home</Nav.link>
          <Nav.link href="/add-recipe">Add Recipe</Nav.link>
          <Nav.link href="/delete-recipe">Delete Recipe</Nav.link>
        </Nav>
      </NavBar>

      <Switch>
        <Route exact path = "/" component={App} />
        <Route path = "/add-recipe" component={AddRecipe} />
        <Route path = "/delete-recipe" component={DeleteRecipe} />
      </Switch>
      
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
