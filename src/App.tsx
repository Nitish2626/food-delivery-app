import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

const App = () => {

  const theme=useContext(ThemeContext);

  return (
    <div className={`${theme?.darkTheme ? "bg-black" : "bg-white"}`}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
