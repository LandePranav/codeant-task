import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Login from './components/login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Login />
        {/* <Navbar /> */}
      </div>
    </>
  )
}

export default App
