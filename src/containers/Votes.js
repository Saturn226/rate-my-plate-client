import React, {Component} from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
import {UpvoteButton, DownvoteButton}from '../components/VoteButtons.js'
import {upvotePlate, downvotePlate} from '../actions/plates.js'
class Votes extends Component{
    constructor(props){
        super(props)
        this.state = {
            upvotes: '0',
            downvotes: '0', 
        }
    }

    componentDidMount(){

      // this.props.getVotes(this.props.plate)
        
    }
  hasVoted = (plate, user, voteType) =>{
  
        plate = this.props.plates.find((statePlate) => statePlate.id == plate.id)
        switch(voteType){
            case "upvote":
               return !!plate.upvotes.find((votes)=>{
                    return votes.voter_id === user
                })

            case "downvote":
            return !!plate.downvotes.find((votes)=>{
                return votes.voter_id === user
            })
        }
    }


    handleClick = (e) => {
        const plate = this.props.plate
        const user = this.props.user
        if (e.target.className.includes("upvote") && !this.hasVoted(plate, user, "upvote")){
            this.props.upvotePlate(plate)}
        if(e.target.className.includes("downvote") && !this.hasVoted(plate, user, "downvote")){
           this.props.downvotePlate(plate)}
    }
    
    getVotes = ( ) => {
        let plate = this.props.plate
        return this.props.plates.find(statePlate => plate.id == statePlate.id)
    }
   
    render(){
        const {upvotes, downvotes} = this.state
    
        return(
            <div>
                <Upvote className="upvote" name="upvote" onClick={this.handleClick}>
                        <i className="fa upvote fa-thumbs-o-up"></i> 
                </Upvote>
               Upvotes :{this.getVotes().upvotes.length}
                <Downvote className="downvote" name="downvote" onClick={this.handleClick}>
                    <i className="fa downvote fa-thumbs-o-down"></i>
                </Downvote> 
                Downvotes: {this.getVotes().downvotes.length}
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
const mapStateToProps = (state) =>{
    return ({plates: state.plates})
}
export default connect(mapStateToProps, {upvotePlate,downvotePlate})(Votes)