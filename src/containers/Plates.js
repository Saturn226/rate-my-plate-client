import React, {Component} from "react"
import PlateCard from '../components/PlateCard'
import PlateForm from './PlateForm.js'
import {connect} from 'react-redux'
import {getPlates} from '../actions/plates.js'

 class Plates extends Component{
     constructor(props){
        super(props)
     }

     handleOnClick = (event) => {
        const vote = event.target.name
        switch(vote){
            case "upvote":
                console.log('upvote')
                return
            case "downvote":
                console.log('downvote')
                return
                default:
                return
        }
     }

     componentDidMount(){
        this.props.getPlates()
     }
     render(){
        
         return(
            <div>
            <h3>Plates Component</h3>
            {this.props.plates.map(plate =>
                <div key={plate.id}>
                <PlateCard plate={plate} />
                <button onClick={this.handleOnClick} name="upvote">+</button>
                <button onClick={this.handleOnClick} name="downvote">-</button>
                </div>
            )}

            <PlateForm/>
            </div>

         )
     }
 }

 const mapStateToProps = (state) => {
     return({
         plates: state.plates
     })
 }
    
export default connect(mapStateToProps, {getPlates})(Plates)