import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/home/Home";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import CartCustomerDashboard from "./components/cart customer dashboard/CartCustomerDashboard";
import HomeCustomerDashboard from "./components/home customer dashboard/HomeCustomerDashboard";
import OrdersCustomerDashboard from "./components/orders customer dashboard/OrdersCustomerDashboard";
import AccountCustomerDashboard from "./components/account customer dashboard/AccountCustomerDashboard";
import HomeBusinessDashboard from "./components/home business dashboard/HomeBusinessDashboard";
import AddFoodItemForm from "./components/add food item form/AddFoodItemForm";
import PrivateRoute from "./components/private routing/PrivateRoute";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

const App = () => {

  const theme = useContext(ThemeContext);
  console.log("app", theme?.user);

  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/signup"
            element={<Signup />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          {/* <Route path="/" element={<PrivateRoute />}> */}
          <Route
            path="/customer-dashboard/home"
            element={<HomeCustomerDashboard />}
          />
          {/* </Route> */}
          <Route
            path="/customer-dashboard/orders"
            element={<OrdersCustomerDashboard />}
          />
          <Route
            path="/customer-dashboard/cart"
            element={<CartCustomerDashboard />}
          />
          <Route
            path="/customer-dashboard/account"
            element={<AccountCustomerDashboard />}
          />
          <Route
            path="/business-dashboard/home"
            element={<HomeBusinessDashboard />}
          />
          <Route
            path="/business-dashboard/home/add-product"
            element={<AddFoodItemForm />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;