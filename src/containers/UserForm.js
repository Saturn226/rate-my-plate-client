import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createUser} from '../actions/users'


class UserForm extends Component    {
    state ={
        username: '',
        password: ''
    }
    submit = (e) => {
        e.preventDefault();
        this.props.createUser(this.state)
        .then(() => {
            this.setState({
                username: '',
                password: ''
            })
        })
        this.props.history.push("/")
    }

    
    handleOnChange = (e) => {
        this.setState(
            {[e.target.name]: e.target.value}
        )
    }
    render(){
        return(
            <form onSubmit={this.submit}>
            <input onChange={this.handleOnChange}type="text" placeholder="username" name="username"></input>
            <input onChange={this.handleOnChange}type="password" placeholder="password" name="password"></input>
            <input type="submit"/>
        </form>
        )
    }
}
export default connect(null, {createUser})(UserForm)
