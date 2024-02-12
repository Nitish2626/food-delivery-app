import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import CustomerDashboard from "./components/customer dashboard/CustomerDashboard";
import BusinessDashboard from "./components/business dashboard/BusinessDashboard";

const App = () => {

  const theme=useContext(ThemeContext);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/customer-dashboard" element={<CustomerDashboard />}></Route>
          <Route path="/business-dashboard" element={<BusinessDashboard />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
