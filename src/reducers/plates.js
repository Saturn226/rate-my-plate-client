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
                    action.plate.downvotes = action.plate.downvotes.filter(vote =>
                        vote.voter_id !== action.upvote.voter_id )

                   return action.plate
                   }
                    else
                    return plate;
               })
           )

           case 'DOWNVOTE_PLATE':
           return(
            state.map(plate => {
                  if (plate.id == action.plate.id){
                    action.plate.downvotes.push(action.downvote)
                    action.plate.upvotes = action.plate.upvotes.filter(vote =>
                        vote.voter_id !== action.downvote.voter_id )

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