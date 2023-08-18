import { useState } from 'react'
import "./App.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1> Rock Paper Scissors Game </h1>
    </div>

    <h2>Choose:</h2>
        <button class="buttons" id="rock">Rock</button>
        <button class="buttons" id="paper">Paper</button>
        <button class="buttons" id="scissors">Scissors</button>

    <div> 
        <h2> Your Choice: <span id = "your-choice"></span></h2>
        <h2> Computer Choice: <span id="computer-choice"></span></h2>
        <h2> Result: <span id = "result"></span></h2>
    </div>

    </>
  )
}

export default App;
