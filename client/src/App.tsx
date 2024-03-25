import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import SignUp from './pages/signup'
import Dashboard from './pages/dashboard'
import Settings from './pages/dashboard_settings'

export default function App() {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/guides' element={<Home />} />
        <Route path='/contact' element={<Home />} />
        <Route path='/about' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/register' element={<SignUp />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dashboard/settings' element={<Settings/>} />
        
      </Routes>
    </BrowserRouter>
  )
}
