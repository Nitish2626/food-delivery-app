import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./components/home/Home";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";

const App=()=>{
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
