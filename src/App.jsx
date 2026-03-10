import './App.css'
import { Routes, Route } from 'react-router-dom'

import Layout from './components/layout/Layout'
import Home from './components/pages/Home/Home'
import Restaurant from './components/pages/Restaurant/Restaurant'
import Login from './components/layout/Login'
import Signup from './components/layout/Signup'
import Contact from './components/pages/Contact/Contact'
import Offers from './components/pages/Offer/Offer'
import Gallery from './components/pages/Gallery/Gallery'
import Menu from './components/pages/MenuBar/Menu'
import OrderPage from './components/pages/Order/OrderPage'

function App() {
  return (
    <Routes>

      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/offers" element={<Offers/>} />
        <Route path='/restaurants' element={<Restaurant/>}/>
        <Route path='/menubar' element={<Menu/>}/>
        <Route path='/order' element={<OrderPage/>}/>
      </Route>

    </Routes>
  )
}

export default App
