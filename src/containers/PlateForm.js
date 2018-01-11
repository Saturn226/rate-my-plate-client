import React, {Component} from 'react'
import {connect} from 'react-redux'
import {updatePlateFormData} from '../actions/plateForm'
import {createPlate} from '../actions/plates'
class PlateForm extends Component{
   constructor(props){
       super(props)
   }

   handleOnChange = (event) => {
       const {name, value} = event.target
       const currentPlateFormData = Object.assign({}, this.props.plateFormData,{
           [name]: value
       })
        this.props.updatePlateFormData(currentPlateFormData)
   }

   handleOnSubmit = (event) =>{
        event.preventDefault()
        this.props.createPlate(this.props.plateFormData)
   }
   
    render(){
        const {name, description, img_url} = this.props.plateFormData
        return(
            <div>
                Create a Plate
                <form onSubmit={this.handleOnSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" value={name} onChange={this.handleOnChange}/>
                    </div>
                    
                    <div>
                        <label htmlFor="name">description</label>
                        <input type="text" name="description" value={description} onChange={this.handleOnChange}/>
                    </div>

                    <div> 
                        <label htmlFor="name">Image</label>
                        <input type="text" name="img_url" value={img_url} onChange={this.handleOnChange}/>
                    </div>
                    <button type="submit">Create a Plate </button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return({
        plateFormData: state.plateFormData
    })
}
export default connect(mapStateToProps, {updatePlateFormData, createPlate})(PlateForm)