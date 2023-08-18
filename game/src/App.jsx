import { useState } from 'react'
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandBackFist, faHand, faHandScissors } from '@fortawesome/free-solid-svg-icons'
import Player from './components/Player';




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

    <div className="player-container"> 
        <Player name="Player" score={0}/>
        <Player name="Computer" score={0}/>
        {/* <div className='player'>
          <h2 className='score'> Player's score: <span id = "player-score"></span></h2>
          <div className='action'></div>
        </div> */}
        {/* <div className='player'>
          <h2 className='score'> Computer's score: <span id="computer-score"></span></h2>
          <div className='action'></div>
        </div> */}
    </div>

    <div className="result">
      <h2> Who won? <span id = "result"></span></h2>
    </div>
    </>
  )
}

export default App;
