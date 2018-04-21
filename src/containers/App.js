import React, {Component} from 'react';
import Plates from './Plates.js'
import './App.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NewUser from './NewUser.js'


export default class App extends Component{
    render(){
       
        return(
            <Router>
                <div className="App">
                    App Container
                <Switch>
                <Route exact path="/" component={Plates}/>
                <Route exact path="/users/new" component={NewUser}/>
                </Switch>
                </div>

            </Router>
        )
    }
}