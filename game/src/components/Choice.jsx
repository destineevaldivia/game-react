import { react } from 'react';

function Choice (props) {
    const icons = {
        rock: faHandBackFist,
        paper: faHand,
        scissors: faHandScissors
    }
    return (
        <div className="choice-container">
            <h2>Choose:</h2> {/*
            <button className="buttons" id="rock-btn">Rock <FontAwesomeIcon icon={faHandBackFist} /></button>
            <button className="buttons" id="paper-btn">Paper <FontAwesomeIcon icon={faHand} /></button>
            <button className="buttons" id="scissors-btn">Scissors <FontAwesomeIcon icon={faHandScissors} /></button> */}

        </div>
    )
}
export default Choice;