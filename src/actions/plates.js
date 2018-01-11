import {resetPlateForm} from './plateForm'
export const API_URL = process.env.REACT_APP_API_URL

const setPlates = plates => {
    return {
        type: 'GET_PLATES_SUCCESS',
        plates
    }
}

const addPlate = plate => {
    return {
        type: 'CREATE_PLATE_SUCCESS',
        plate
    }
}

export const getPlates = () => {
   return dispatch => {
        fetch(`${API_URL}/plates`)
        .then(response => response.json())
        .then(plates => dispatch(setPlates(plates)))
        .catch(error => console.log(error))
    }
    
}

export const createPlate = plate =>{
    return dispatch =>{
        return fetch(`${API_URL}/plates`, {
           method: 'POST',
           headers: {
               'content-type': 'application/json'
           } ,
           body: JSON.stringify({plate: plate})
        })
        .then(response => response.json())
        .then(plate => {
            dispatch(addPlate(plate))
            dispatch(resetPlateForm())
        })
        .catch(error => console.log(error))
     }
 }