import MobileNotLoginDrawerInfo from "./MobileNotLoginDrawerInfo";
import MobileNotLoginDrawerHeader from "./MobileNotLoginDrawerHeader";
import MobileNotLoginDrawerMenuList from "./MobileNotLoginDrawerMenuList";

const MobileHeaderNotLogin = () => {
  return (
    <div className="p-4">
      <MobileNotLoginDrawerHeader />
      <MobileNotLoginDrawerInfo />
      <MobileNotLoginDrawerMenuList />
    </div>
  );
};

export default MobileHeaderNotLogin;
