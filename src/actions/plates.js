const API_URL = process.env.REACT_APP_API_URL

const setPlates = plates => {
    return {
        type: 'GET_PLATES_SUCCESS',
        plates
    }
}

export const getPlates = () => {
   return dispatch => {
        fetch(`${API_URL}/plates`)
        .then(response => response.json())
        .then(plates => dispatch(setPlates))
        .catch(error => console.log(error))
    }
}

 