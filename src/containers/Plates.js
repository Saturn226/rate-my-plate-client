import React from "react"
import PlateCard from '../components/PlateCard'
 const Plates = (props) =>(
    <div>
        <h3>Plates Component</h3>
        {props.plates.map(plate =>
            <PlateCard plate={plate} key={plate.id}/>
        )}
    </div>
)

export default Plates