import { useState } from 'react'
import './App.css'
import Left from './components/Left'
import Right from './components/right'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Left></Left>
      <Right></Right>
    </div>
  )
}

export default App