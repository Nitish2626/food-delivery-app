import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home/Home";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import CartCustomerDashboard from "./components/cart customer dashboard/CartCustomerDashboard";
import HomeCustomerDashboard from "./components/home customer dashboard/HomeCustomerDashboard";
import OrdersCustomerDashboard from "./components/orders customer dashboard/OrdersCustomerDashboard";
import AccountCustomerDashboard from "./components/account customer dashboard/AccountCustomerDashboard";
import HomeBusinessDashboard from "./components/home business dashboard/HomeBusinessDashboard";
import AddFoodItemForm from "./components/add food item form/AddFoodItemForm";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import AccountBusinessDashboard from "./components/accountBusinessDashboard/AccountBusinessDashboard";

const App = () => {

  const theme = useContext(ThemeContext);

  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={theme?.isLoggedIn ? <Navigate to="/customer-dashboard/home" /> : <Home /> || theme?.isBusinessLoggedIn ? <Navigate to="/business-dashboard/home" /> : <Home />}
          />
          <Route
            path="/signup"
            element={<Signup />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/customer-dashboard/home"
            element={theme?.isLoggedIn ? <HomeCustomerDashboard /> : <Navigate to="/login" />}
          />
          <Route
            path="/customer-dashboard/orders"
            element={theme?.isLoggedIn ? <OrdersCustomerDashboard /> : <Navigate to="/login" />}
          />
          <Route
            path="/customer-dashboard/cart"
            element={theme?.isLoggedIn ? <CartCustomerDashboard /> : <Navigate to="/login" />}
          />
          <Route
            path="/customer-dashboard/account"
            element={theme?.isLoggedIn ? <AccountCustomerDashboard /> : <Navigate to="/login" />}
          />
          <Route
            path="/business-dashboard/home"
            element={theme?.isBusinessLoggedIn ? <HomeBusinessDashboard /> : <Navigate to="/login" />}
          />
          <Route
            path="/business-dashboard/home/add-product"
            element={theme?.isBusinessLoggedIn ? <AddFoodItemForm /> : <Navigate to="/login" />}
          />
          <Route
            path="/business-dashboard/account"
            element={theme?.isBusinessLoggedIn ? <AccountBusinessDashboard /> : <Navigate to="/login" />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;