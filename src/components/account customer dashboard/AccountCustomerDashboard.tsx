import { useContext } from 'react';
import BottomBar from '../customer bottom bar/CustomerBottomBar';
import { ThemeContext } from '../../context/ThemeContext';
import { MdLogout } from "react-icons/md";
import { logoutUser } from '../../helpers/customerApiCommunicator';
import { useNavigate } from 'react-router-dom';

const AccountCustomerDashboard = () => {

  const navigate=useNavigate();

  const theme = useContext(ThemeContext);

  const logout=async()=>{
    const data= await logoutUser();
    if(data===true){
      theme?.setUser({name:"",email:""});
      theme?.setIsLoggedIn(false);
      navigate("/");
    }
    else{
      alert("Unable to Logout");
    }
  };

  return (
    <div>
      AccountCustomerDashboard
      <h1>{theme?.user.name},{theme?.user.email}</h1>

      <button
        className={`flex items-center gap-2 text-xl py-1 px-1 rounded-lg mt-2  ${theme?.darkTheme ? "shadow-none bg-gray-800 text-white hover:bg-gray-700" : "shadow-md shadow-gray-300 hover:bg-gray-200 hover:shadow-none"}`}
        onClick={logout}
      >
        Logout
        <MdLogout
          className='w-6 h-6'
        />
      </button>

      <BottomBar />
    </div>
  );
};

export default AccountCustomerDashboard;