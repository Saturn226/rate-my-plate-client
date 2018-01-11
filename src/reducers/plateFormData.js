const initialState = {
    name: '',
    description: '',
    img_url: ''
} 
export default (state = initialState, action) => {
    switch(action.type){
        case 'UPDATED_DATA' :
            return action.plateFormData
        case 'RESET_PLATE_FORM':
            return initialState;
        default:
            return state;
    }
}