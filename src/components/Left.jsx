import { useState } from 'react'


function Left() {
  const [count, setCount] = useState(0)

  return (
    <div className='Left'>
        <h1>⛅ WeatherDash</h1>
        <h2>🏠 Dashboard</h2>
        <h2>🔍 Search</h2>
        <h2>ℹ️ About</h2>
    </div>
  )
}

export default Left