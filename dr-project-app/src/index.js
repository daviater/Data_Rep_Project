import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddRecipe from './Component/AddRecipe';
import DeleteRecipe from './Component/DeleteRecipe';

ReactDOM.render(<Router>
    <div>
      <Route exact path='/' component={App} />
      <Route path='/add-recipe' component={AddRecipe} />
      <Route path='/delete-recipe' component={DeleteRecipe}/>
    </div>
</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
