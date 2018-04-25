const plates = (state = [], action) => {
    switch(action.type){
        case 'GET_PLATES_SUCCESS':
            return action.plates;
        case 'CREATE_PLATE_SUCCESS':
            return state.concat(action.plate)
        case 'UPVOTE_PLATE':

           return(
             state.map(plate => {
                   if (plate.id == action.plate.id){
                     action.plate.upvotes.push(action.upvote)

                    return action.plate
                   }
                    else
                    return plate;
               })
           )
        default:
            return state;
    }
}

export default plates