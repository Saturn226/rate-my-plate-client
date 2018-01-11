import React from "react"
import styled, {keyframes} from 'styled-components'
import Votes from '../containers/Votes.js'


const fill = keyframes`
0% {width: 0%}
100% {width: 100%} 
`;

const Wrapper = styled.div`
    display: inline-block;
    min-width: 300px;
    margin: 0.5em;
    background: papayawhip;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
const TextContainer = styled.div`
    background: white;
    text-align: center;
    padding: 10px 20px;
`
const ProgressBar = styled.div`
  
  background: lightblue;
  height:24px;
  animation: ${fill} 5s linear infinite;

`

const ProgressBarWrapper = styled.div`
    border: 2px solid lightblue;
`





const PlateCard = ({plate}) => (

    <Wrapper>

        <h3>{plate.name}</h3>
        <img src={"https://vignette.wikia.nocookie.net/plantsvszombies/images/6/66/Pepperoni_Pizza.png/revision/latest?cb=20160312163457"}/>
        
    <TextContainer>
        <p>{plate.description}</p>
        <Votes plate={plate}/>
      </TextContainer>
    </Wrapper>
)

export default PlateCard; 