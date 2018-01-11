import React, {Component} from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
import {UpvoteButton, DownvoteButton}from '../components/VoteButtons.js'
import {upvotePlate, API_URL} from '../actions/plates.js'
export default class Votes extends Component{
    constructor(props){
        super(props)
        this.state = {
            upvotes: '',
            downvotes: '', 
        }
    }

    componentDidMount(){

       this.getVotes(this.props.plate)
        
    }



    upvotePlate = (plate) =>{   
            fetch(`${API_URL}/plates/${plate.id}/upvote`,{
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({plate: plate})
            })
            .then(response => response.json())
            .then(votes => {
                this.setState({
                    upvotes: votes.upvotes,
                    downvotes: votes.downvotes
                })
             })
            .catch(error => console.log(error))  
    }

    downvotePlate = (plate) =>{   
        fetch(`${API_URL}/plates/${plate.id}/downvote`,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({plate: plate})
        })
        .then(response => response.json())
        .then(votes => {
            this.setState({
                upvotes: votes.upvotes,
                downvotes: votes.downvotes
            })
         })
        .catch(error => console.log(error))  
}



    getVotes = (plate) => {
            fetch(`${API_URL}/plates/${plate.id}/votes`)
            .then(response => response.json())
            .then(votes => {
               this.setState({
                   upvotes: votes.upvotes,
                   downvotes: votes.downvotes
               })
            })
           .catch(error => console.log(error))
    }
    
 
    handleClick = (e) => {
        const plate = this.props.plate
        alert(e.target.name)
        if (e.target.name === "upvote")
            this.upvotePlate(plate)
        if(e.target.name === "downvote")
           this.downvotePlate(plate)
    }
        
    testEvent = () =>{
        alert("Fired Event")
    }
    render(){
        const {upvotes, downvotes} = this.state
    
        return(
            <div>
                <Upvote name="upvote" onClick={this.handleClick}>
                        <i className="fa fa-thumbs-o-up"></i> 
                </Upvote>
                Upvotes :{upvotes}
                <Downvote name="downvote" onClick={this.handleClick}>
                    <i className="fa fa-thumbs-o-down"></i>
                </Downvote> 
                Downvotes: {downvotes}


                <button name="upvote" onClick={this.handleClick}></button>
                <button name="downvote" onClick={this.handleClick}></button> 
            </div>
        )
    }
}

const Upvote = styled.button`
    background: lightblue;
    width: 50px;
    height: 50px;
    border-radius: 5px;
    margin: 2px;
    font-size: 2em;
    color: white;
`

const Downvote = styled.button`
    background: lightblue;
    border-radius: 5px;
    width: 50px;
    height: 50px;
    margin: 2px;
    font-size: 2em;
    color: white
`
