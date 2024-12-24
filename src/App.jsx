import './App.css'
import Login from './components/login'
import { HashRouter, Routes, Route } from 'react-router-dom'
import LoaderPage from './components/loaderPage'
import Home from './components/home'
import UserContext from './context/userContext'

function App() {

  return (
    <UserContext>
      <HashRouter>
        <Routes>
          <Route index path='/' element={<Login />} />
          <Route path='/rerouting' element={<LoaderPage />} />
          <Route path='/home/*' element={<Home />} />
        </Routes>
      </HashRouter>
    </UserContext>
  )
}

export default App
