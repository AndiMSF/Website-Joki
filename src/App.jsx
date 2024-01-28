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
import OrdersAdmin from "./scenes/admin/ordersAdmin/OrdersAdmin";
import SidebarAdmin from "./components/admin/SidebarAdmin/SidebarAdmin";

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
          <Route
            path="/admin"
            element={<SidebarAdmin>{<HomePageAdmin />}</SidebarAdmin>}
          />
          <Route
            path="/admin/orders"
            element={<SidebarAdmin>{<OrdersAdmin />}</SidebarAdmin>}
          />
          {/* <Route path="/admin/transactions" element={<TransactionsAdmin />} />
          <Route path="/admin/games" element={<GamesAdmin />} />
          <Route path="/admin/prices" element={<PricesAdmin />} /> */}

          {/* User */}
          <Route path="/order/valorant" element={<OrderPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
