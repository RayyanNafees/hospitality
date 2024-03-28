import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
//import SignUp from './pages/signup'
import Dashboard from './pages/dashboard/index'
import SignUp from './pages/signup'
import SideNav from './layouts/sidenav'
import Settings from './pages/dashboard/settings'

export default function App() {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/guides' element={<Home />} />
        <Route path='/contact' element={<Home />} />
        <Route path='/about' element={<Home />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/signup'} element={<SignUp />} />
        <Route path='/dashboard' element={<SideNav />}>
          <Route index element={<Dashboard />} />
          <Route path='settings' element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
