const plates = (state = [], action) => {
    switch(action.type){
        case 'GET_PLATES_SUCCESS':
            return action.plates;
        case 'CREATE_PLATE_SUCCESS':
            return state.concat(action.plate)
        default:
            return state;
    }
}

export default plates