import React, {Component} from 'react'
import UserForm from './UserForm'

class NewUser extends Component{
   
    
    render(){
        return(
          <UserForm history={this.props.history} submit={this.submit}/>
        )
    }
}

export default NewUser

