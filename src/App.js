import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListUserComponent from "./components/ListUserComponent";
import AddUserComponent from "./components/AddUserComponent";
import EditUserComponent from "./components/EditUserComponent";
function App() {
  return (
    <div className="container">
     <Router> 
      <nav>
      </nav> 
      <Switch>
        <Route path="/" exact component={ListUserComponent} />
        <Route path="/users" component={ListUserComponent} />
        <Route path="/add-user" component={AddUserComponent} />
        <Route path="/edit-user" component={EditUserComponent} />
      </Switch>
     </Router>
    </div>
  );
}

export default App;
