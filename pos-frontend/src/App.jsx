//import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Auth, Orders, Header } from "./index";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
