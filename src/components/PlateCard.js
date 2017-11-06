import React from "react"

const PlateCard = ({plate}) => (
    <div>
    <h3>{plate.name}</h3>
    <p>{plate.description}</p>
    <p>Upvote: {plate.upvote}</p>
    <p>Downvote: {plate.downvote}</p>
    </div>
)

export default PlateCard;