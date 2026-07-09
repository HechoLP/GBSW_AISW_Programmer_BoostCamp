import { useState } from 'react'
import './App.css'
import CounterButton from './components/CounterButton'

function App() {
  const [count, setCount] = useState(0)

  function changeNum(number) {
    setCount(count + Number(number))
  }
  
  return (
    <>
      <h2>Counter 실습을 통한 양방향 props전달 실습.</h2>
      <div style={{fontSize: "36px"}}>
        <span>{count}</span>
      </div>
      <div>
        <CounterButton buttonText={"-1"} changeNum={changeNum}></CounterButton>
        <CounterButton buttonText={"+1"} changeNum={changeNum}></CounterButton>
      </div>
    </>
  )
}

export default App
 