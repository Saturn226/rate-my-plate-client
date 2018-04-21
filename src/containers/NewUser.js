import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createUser} from '../actions/users'
import UserForm from './UserForm'
class NewUser extends Component{
  render(){
      return(
          <div>
              Create a New users
              <UserForm history={this.props.history}/>
          </div>
      )
  }
}

export default NewUser

