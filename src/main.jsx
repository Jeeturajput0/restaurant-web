import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './components/layout/ScrollToTop.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { StoreProvider } from './context/StoreContext.jsx'
import Toasts from './components/common/Toasts.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ThemeProvider>
    <StoreProvider>
     <BrowserRouter>
      <ScrollToTop />
      <App />
      <Toasts />
     </BrowserRouter>
    </StoreProvider>
   </ThemeProvider>
  </StrictMode>,
)
