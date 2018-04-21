export const API_URL = process.env.REACT_APP_API_URL

export const createUser = (user) => {
    return dispatch => {
        return fetch(`${API_URL}/users`,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            } ,
            body: JSON.stringify({user}),
        }).then(res =>{
            return res.json()
        })
        .then(data => {
           localStorage.setItem('token', data.token);
            debugger;
        })
    }
}