import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";

const PrivateRoute= () => {

    const theme=useContext(ThemeContext);

  return (
    <>
    {theme?.isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />}
    </>
  );
};

export default PrivateRoute;