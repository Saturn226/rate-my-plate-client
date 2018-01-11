import React from "react"
import styled from 'styled-components'
import handleClick from '../containers/Votes.js'

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



export const UpvoteButton = (props) =>{

    return(
        <Upvote name="upvote" onClick={props.handleClick.bind(this)}><i className="fa fa-thumbs-o-up"></i></Upvote>        
    )
}

export const DownvoteButton = (props) =>{
    return (
        <Downvote name="downvote" onClick={props.handleClick.bind(this)}><i className="fa fa-thumbs-o-down"></i></Downvote>

    )
}