import React, {Component} from 'react';
import Plates from './Plates.js'
import './App.css'


export default class App extends Component{
    render(){
       
        return(
            <div className="App">
                App Container
            
                <Plates/>
            </div>
        )
    }
}