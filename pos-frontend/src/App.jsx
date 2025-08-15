//import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Home, Auth, Orders, Header, Tables, Menu } from "./index";

function Layout() {
  const location = useLocation();
  const hideHeaderRoutes = ["/auth"];
  return (
    <> 
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="/menu" element={<Menu />} />
        {/* Add more routes as needed */}
      </Routes>
    </>
  )
}

function App() {
  return(
    <Router>
      <Layout />
    </Router>
  )
}

export default App;