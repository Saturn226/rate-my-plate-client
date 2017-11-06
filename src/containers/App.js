import React, {Component} from 'react';
import Plates from './Plates.js'
import './App.css'
const API_URL = process.env.REACT_APP_API_URL

export default class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            plates: []
        }
    }

    componentDidMount(){
        fetch(`${API_URL}/plates`)
        .then(response => response.json())
        .then(plates => this.setState({plates}))
    }
    render(){
        return(
            <div className="App">
                App Container
                <Plates plates={this.state.plates}/>
            </div>
        )
    }
}