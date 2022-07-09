import { useState } from 'react'

const Button = (props) => {
  return <button onClick = {props.onClick}>{props.text}</button>
}
const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}
const Statistics = (props) => {
  const all = (props.good + props.bad + props.neutral)
  if (all == 0) {
    return <div>No feedback given.</div>
  }
  const avg = (props.good - props.bad) / all
  const percentPositive = (props.good / all) * 100

  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text = "good" value = {props.good}></StatisticLine>
          <StatisticLine text = "neutral" value = {props.neutral}></StatisticLine>
          <StatisticLine text = "bad" value = {props.bad}></StatisticLine>
          <StatisticLine text = "all" value = {all}></StatisticLine>
          <StatisticLine text = "average" value = {avg}></StatisticLine>
          <StatisticLine text = "positive" value = {`${percentPositive}%`}></StatisticLine>
        </tbody>
      </table>
    </div>
  )
}



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <div>
        <Button onClick = {() => setGood(good + 1)} text = "good"></Button>
        <Button onClick = {() => setNeutral(neutral + 1)} text = "neutral"></Button>
        <Button onClick = {() => setBad(bad + 1)} text = "bad"></Button>
      </div>
      <h1>Statistics</h1>
      <Statistics good = {good} bad = {bad} neutral = {neutral}></Statistics>

    </div>
  )
}

export default App