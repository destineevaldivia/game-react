import { useState } from 'react'
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandBackFist, faHand, faHandScissors } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className ="body">
      <h1> Rock Paper Scissors Game </h1>
    </div>

    <div className="choice-container">
        <h2>Choose:</h2>
        <button className="buttons" id="rock-btn">Rock <FontAwesomeIcon icon={faHandBackFist} /></button>
        <button className="buttons" id="paper-btn">Paper <FontAwesomeIcon icon={faHand} /></button>
        <button className="buttons" id="scissors-btn">Scissors <FontAwesomeIcon icon={faHandScissors} /></button>
    </div>

    <div className="output-container"> 
        <h2> Player's Choice: <span id = "player-choice"></span></h2>
        <h2> Computer's Choice: <span id="computer-choice"></span></h2>
        <h2> Who won? <span id = "result"></span></h2>
    </div>

    </>
  )
}

export default App;
