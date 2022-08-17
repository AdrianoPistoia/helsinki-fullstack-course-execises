import { useState } from 'react'
import {Button} from "./components/Button.js"
import{StatisticLine} from "./components/StatisticLine.js"

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
        <table>
          <StatisticLine text="good" value={good}/>
          <StatisticLine text="neutral" value={neutral}/>
          <StatisticLine text="bad" value={bad}/>
          <StatisticLine text="all" value={(good+neutral+bad)}/>
          <StatisticLine text="average" value={(good-bad) / (good+bad+neutral)}/>
          <StatisticLine text="positive" value={good/(good+neutral+bad)+"%"}/>
        </table> 
    </div>
  )
}

export default App

