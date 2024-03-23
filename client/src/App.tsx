import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import SignUp from './pages/signup'
import Dashboard from './pages/dashboard'

export default function App() {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route index path='/guides' element={<Home />} />
        <Route index path='/contact' element={<Home />} />
        <Route index path='/about' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/register' element={<SignUp />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}
