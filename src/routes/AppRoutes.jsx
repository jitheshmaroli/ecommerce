import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Checkout from "../pages/Checkout";
import NavBar from "../components/NavBar";
import ProtectedRoute from "../components/ProtectedRoute";

const AppRoutes = () => {
  const location = useLocation();

  const hideNavBar = location.pathname === "/";

  return (
    <>
      {!hideNavBar && <NavBar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default AppRoutes;
