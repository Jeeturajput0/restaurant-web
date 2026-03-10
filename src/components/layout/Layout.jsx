import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import SiteParallax from './SiteParallax'
import CartDrawer from './CartDrawer'
import { CartProvider } from '../../context/CartContext'

const Layout = () => {
  return (
    <CartProvider>
      <div className='relative min-h-screen bg-black text-white'>
        <SiteParallax />
        <Header/>
        <CartDrawer />
        <main className='relative z-10'>
          <Outlet/>
        </main>
        
        <div className='relative z-10'>
          <Footer/>
        </div>
      </div>
    </CartProvider>
  )
}

export default Layout
