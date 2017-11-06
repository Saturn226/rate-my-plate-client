import React, {Component} from "react"
import PlateCard from '../components/PlateCard'
import PlateForm from './PlateForm.js'
import {connect} from 'react-redux'
import {getPlates} from '../actions/plates.js'

 class Plates extends Component{
     constructor(props){
        super(props)
     }

     componentDidMount(){
        this.props.getPlates()
     }
     render(){
        
         return(
            <div>
            <h3>Plates Component</h3>
            {this.props.plates.map(plate =>
                <PlateCard plate={plate} key={plate.id}/>
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