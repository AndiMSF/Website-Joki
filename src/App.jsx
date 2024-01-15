/* eslint-disable no-unused-vars */
import HomePage from "./scenes/homePage/HomePage";
import LoginPage from "./scenes/loginPage/LoginPage";
import OrderPage from "./scenes/orderPage/OrderPage";
import RegisterPage from "./scenes/registerPage/RegisterPage";
import ForgotPassword from "./scenes/forgotPassword/ForgotPassword";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/order/valorant" element={<OrderPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
