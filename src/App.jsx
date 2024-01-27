/* eslint-disable no-unused-vars */
import HomePage from "./scenes/user/homePage/HomePage";
import LoginPage from "./scenes/user/loginPage/LoginPage";
import OrderPage from "./scenes/user/orderPage/OrderPage";
import RegisterPage from "./scenes/user/registerPage/RegisterPage";
import ForgotPassword from "./scenes/user/forgotPassword/ForgotPassword";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// Redux
import { Provider } from "react-redux";
import { store } from "./store";
import HomePageAdmin from "./scenes/admin/homePageAdmin/HomePageAdmin";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {/* General */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Admin */}
          <Route path="/admin/" element={<HomePageAdmin />} />

          {/* User */}
          <Route path="/order/valorant" element={<OrderPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
