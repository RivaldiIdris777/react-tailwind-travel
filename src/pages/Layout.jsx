import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from "../components/Navbar/Navbar.jsx"
import Footer from "../components/Footer/Footer.jsx"
import OrderPopup from '../components/OrderPopup/OrderPopup.jsx'
const Layout = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  return (
    <>    
      <Navbar handleOrderPopup={handleOrderPopup}/>
      <Outlet/>
      <Footer/>
      <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </>
  )
}

export default Layout
