import Logo from '../logo/Logo';
import ThemeButton from '../theme button/ThemeButton';
import HomeTopbarContainer from '../home topbar container/HomeTopbarContainer';
import BusinessBottomBar from '../business bottom bar/BusinessBottomBar';
import MyProductsContainer from '../my products container/MyProductsContainer';

const HomeBusinessDashboard = () => {
  return (
    <div>
      <HomeTopbarContainer>
        <Logo />
        <ThemeButton />
      </HomeTopbarContainer>
      
      <MyProductsContainer />

      <BusinessBottomBar />
    </div>
  );
};

export default HomeBusinessDashboard;