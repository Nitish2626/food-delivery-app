import { useContext } from 'react';
import BottomBar from '../customer bottom bar/CustomerBottomBar';
import { ThemeContext } from '../../context/ThemeContext';

const AccountCustomerDashboard = () => {

  const theme=useContext(ThemeContext);

  return (
    <div>
        AccountCustomerDashboard

        <h1>{theme?.user.name},{theme?.user.email}</h1>

        <BottomBar />
    </div>
  );
};

export default AccountCustomerDashboard;