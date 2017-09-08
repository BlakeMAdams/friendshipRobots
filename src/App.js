import React, { Component } from 'react';
import './App.css';
import './normalize.css';
import { Route, Switch } from 'react-router-dom';
import Search from './components/search/Search';
import Dashboard from './components/dashboard/Dashboard';
import EditProfile from './components/editprofile/EditProfile';
import Home from './components/home/Home';


class App extends Component {
  render() {
    return (
      <div>


        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/dashboard' component={Dashboard} pageTitle="Dashboard" />
          <Route path='/editprofile' component={EditProfile} pageTitle="EditProfile" />
          <Route path='/search' component={Search} pageTitle="Search" />
        </Switch>




      </div>
    );
  }
}

export default App;
