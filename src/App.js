// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";


export default class App extends Component {
  c = 'jone'
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    
    return (
      <Router>
      <div>
       <NavBar/>
       <LoadingBar
       height = {4}
        color='#f11946'
        progress={this.state.progress}

      />
        <Switch>
       <Route exact path="/">
          <News setProgress={this.setProgress}   key="general" category = "general" country="in" pageSize={15}/>
        </Route>
        <Route exact path="/business">
          <News setProgress={this.setProgress}   key="business" category = "business" country="in" pageSize={15}/>
        </Route>
        <Route exact path="/entertainment">
          <News setProgress={this.setProgress}   key="entertainment" category = "entertainment" country="in" pageSize={15}/>
        </Route>
        <Route exact path="/general">
          <News setProgress={this.setProgress}   key="genral" category = "general" country="in" pageSize={15}/>
        </Route>
        <Route exact path="/health">
          <News setProgress={this.setProgress}   key="health" category = "health" country="in" pageSize={15}/>
        </Route>
        <Route exact path="/science">
          <News setProgress={this.setProgress}   key="science" category = "science" country="in" pageSize={15}/>
        </Route>
        <Route exact path="/sports">
          <News setProgress={this.setProgress}   key="sports" category = "sports" country="in" pageSize={15}/>
        </Route>
        <Route exact path="/technology">
          <News setProgress={this.setProgress}   key="technology" category = "technology" country="in" pageSize={15}/>
        </Route>
       {/* <News setProgress={this.setProgress}   category = "sports" country="in" pageSize={5}/> */}


      </Switch>
      </div>
      </Router>
    )
  }
}


