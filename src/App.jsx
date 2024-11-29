import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Account from '../pages/accounts/Account'
import Layout from './template/Layout'
import Home from '../pages/home/Home'
import 'daisyui/dist/full.css'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout main={<Home />} />} />
        <Route path="/login" element={<Layout main={<Login />} />} />
        <Route path="/signup" element={<Layout main={<Signup />} />} />
        <Route path="/account" element={<Layout main={<Account />} />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
