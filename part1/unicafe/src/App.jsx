import { useState } from 'react'
import BasicButton from './components/BasicButton'
import Statistics from './components/Statistics'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = (type) => {
    if(type === 'good')
      setGood(prevVal => prevVal + 1)

    if(type === 'neutral')
      setNeutral(prevVal => prevVal + 1)

    if(type === 'bad')
      setBad(prevVal => prevVal + 1)
  }

  return (
    <>
      <header>
        <h1>Give feedback</h1>
        <BasicButton label="good" onClick={() => handleClick('good')} />
        <BasicButton label="neutral" onClick={() => handleClick('neutral')} />
        <BasicButton label="bad" onClick={() => handleClick('bad')} />
      </header>

      <br/>

      <Statistics good={good} bad={bad} neutral={neutral} />
    </>
  )
}

export default App