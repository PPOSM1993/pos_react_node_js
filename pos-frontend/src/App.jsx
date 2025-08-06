//import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Auth, Orders, Header, BottomNav, Tables } from "./index";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/tables" element={<Tables />} />
          {/* Add more routes as needed */}
        </Routes>
        <BottomNav />
      </Router>
    </>
  );
}

export default App;