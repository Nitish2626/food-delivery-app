import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import BusinessDashboard from "./components/business dashboard/BusinessDashboard";
import CustomerDashboardOrders from "./components/orders customer dashboard/OrdersCustomerDashboard";
import CartCustomerDashboard from "./components/cart customer dashboard/CartCustomerDashboard";
import HomeCustomerDashboard from "./components/home customer dashboard/HomeCustomerDashboard";
import OrdersCustomerDashboard from "./components/orders customer dashboard/OrdersCustomerDashboard";
import AccountCustomerDashboard from "./components/account customer dashboard/AccountCustomerDashboard";

const App = () => {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/customer-dashboard/home" element={<HomeCustomerDashboard />}></Route>
          <Route path="/customer-dashboard/orders" element={<OrdersCustomerDashboard />}></Route>
          <Route path="/customer-dashboard/cart" element={<CartCustomerDashboard />}></Route>
          <Route path="/customer-dashboard/account" element={<AccountCustomerDashboard />}></Route>
          <Route path="/business-dashboard" element={<BusinessDashboard />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
