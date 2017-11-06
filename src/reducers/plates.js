const plates = (state = [], action) => {
    switch(action.type){
        case 'GET_PLATES_SUCCESS':
            return action.plates;
        default:
            return state;
    }
}

export default plates