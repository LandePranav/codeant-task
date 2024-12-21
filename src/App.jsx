import { useState } from 'react'
import './App.css'
import Navbar from './components/pcNavbar'
import Login from './components/login'
import { BrowserRouter as router, Routes, Route, BrowserRouter } from 'react-router-dom'
import LoaderPage from './components/loaderPage'
import Home from './components/home'
import UserContext from './context/userContext'


function App() {
  const [count, setCount] = useState(0);

  return (
    <UserContext>
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<Login />} />
          <Route path='/rerouting' element={<LoaderPage />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </UserContext>
  )
}

export default App
