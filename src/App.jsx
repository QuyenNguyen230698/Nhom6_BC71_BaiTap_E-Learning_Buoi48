
import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import 'daisyui/dist/full.css'
import Layout from './template/Layout'
import Home from './pages/home/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Account from './pages/accounts/Account'
import InfoPage from './pages/infoPage/InfoPage'
import Loading from './components/Loading'
import EventPage from './pages/event/EventPage'
import SearchCourse from './pages/home/SearchCourse'
import ClassDetail from './pages/home/ClassDetail'
import AccountAdmin from './pages/accounts/AccountAdmin'
import ServerError from './pages/ServerError'
import NotFound from './pages/NotFound'
import Return from './pages/payment/Return'
import Payment from './pages/payment/Payment'
import Spring2025 from './pages/spring2025/Spring2025'

function App() {
  return (
    <div>
      <BrowserRouter basename="/">
      <Loading />
      <Routes>
        <Route path="/" element={<Layout main={<Home />} />} />
        <Route path="/login" element={<Layout main={<Login />} />} />
        <Route path="/signup" element={<Layout main={<Signup />} />} />
        <Route path="/infoPage" element={<Layout main={<InfoPage />} />} />
        <Route path="/spring2025" element={<Layout main={<Spring2025 />} />} />
        <Route path="/account" element={<Layout main={<Account />} />} />
        <Route path="/accountAdmin" element={<Layout main={<AccountAdmin />} />} />
        <Route path="/event" element={<Layout main={<EventPage />} />} />
        <Route path="/searchCourse/:maDanhMuc" element={<Layout main={<SearchCourse />} />} />
        <Route path="/classDetail/:maKhoaHoc" element={<Layout main={<ClassDetail />} />} />
        <Route path="/500" element={<ServerError />} />
        <Route path="/return" element={<Layout main={<Return />} />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
