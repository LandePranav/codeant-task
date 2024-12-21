import './App.css'
import Login from './components/login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoaderPage from './components/loaderPage'
import Home from './components/home'
import UserContext from './context/userContext'


function App() {

  return (
    <UserContext>
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<Login />} />
          <Route path='/rerouting' element={<LoaderPage />} />
          <Route path='/home/*' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </UserContext>
  )
}

export default App
