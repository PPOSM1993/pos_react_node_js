//import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { Home, Auth, Orders, Header, Tables, Menu } from "./index";
import { useSelector } from "react-redux";
import useLoadData from "./hooks/userLoadData";
import { FullScreenLoader } from "./index";

function Layout() {
  const isLoading = useLoadData();
  const location = useLocation();
  useLoadData();
  const hideHeaderRoutes = ["/auth"];
  const { isAuth } = useSelector((state) => state.user);

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <>
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
        <Route path="/auth" element={isAuth ? <Navigate to="/" /> : <Auth />} />
        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          } />
        <Route
          path="/tables"
          element={
            <ProtectedRoute>
              <Tables />
            </ProtectedRoute>
          } />

        <Route
          path="/menu"
          element={
            <ProtectedRoute>
              <Menu />
            </ProtectedRoute>
          } />
        {/* Add more routes as needed */}
        <Route path="*" element={<div>Not Found Page</div>} />
      </Routes>
    </>
  )
}

function ProtectedRoute({ children }) {
  const { isAuth } = useSelector((state) => state.user);
  if (!isAuth) {
    return <Navigate to="/auth" />;
  }

  return children;
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  )
}

export default App;