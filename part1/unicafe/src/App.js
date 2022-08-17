import { useState } from 'react'
import {Button} from "./components/Button.js"

import "./App.css"
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  

  return (
    <div className='App'>
      <h1>give feedback</h1>
      <div>
        <Button text="Good" handleClick={() => setGood(good+1)}/>
        <Button text="Neutral" handleClick={() => setNeutral(neutral+1)}/>
        <Button text="Bad" handleClick={() => setBad(bad+1)}/>
      </div>
      <h1>statistics</h1>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {(good+neutral+bad)}</p>
        <p>average: {(good-bad) / (good+bad+neutral)}</p>
        <p>positive: {good/(good+neutral+bad)}%</p>
        <p></p>
    </div>
  )
}

export default App

