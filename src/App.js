// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";


export default class App extends Component {
  c = 'jone'
  render() {
    
    return (
      <Router>
      <div>
       <NavBar/>
        <Switch>
       <Route exact path="/">
          <News key="general" category = "general" country="in" pageSize={5}/>
        </Route>
        <Route exact path="/business">
          <News key="business" category = "business" country="in" pageSize={5}/>
        </Route>
        <Route exact path="/entertainment">
          <News key="entertainment" category = "entertainment" country="in" pageSize={5}/>
        </Route>
        <Route exact path="/general">
          <News key="genral" category = "general" country="in" pageSize={5}/>
        </Route>
        <Route exact path="/health">
          <News key="health" category = "health" country="in" pageSize={5}/>
        </Route>
        <Route exact path="/science">
          <News key="science" category = "science" country="in" pageSize={5}/>
        </Route>
        <Route exact path="/sports">
          <News key="sports" category = "sports" country="in" pageSize={5}/>
        </Route>
        <Route exact path="/technology">
          <News key="technology" category = "technology" country="in" pageSize={5}/>
        </Route>
       {/* <News category = "sports" country="in" pageSize={5}/> */}


      </Switch>
      </div>
      </Router>
    )
  }
}


