import MobileLoginDrawerInfo from "./MobileLoginDrawerInfo";
import MobileLoginDrawerAction from "./MobileLoginDrawerAction";
import MobileLoginDrawerHeader from "./MobileLoginDrawerHeader";
import MobileLoginDrawerMenuList from "./MobileLoginDrawerMenuList";

const MobileHeaderLogin = () => {
  return (
    <div className="p-4">
      <MobileLoginDrawerHeader />
      <MobileLoginDrawerInfo />
      <MobileLoginDrawerMenuList />
      <MobileLoginDrawerAction />

      <p className="text-blackBase dark:text-whiteBase text-center text-xs">
        Vui lòng không tiết lộ mật khẩu cho bất kỳ ai
      </p>
    </div>
  );
};

export default MobileHeaderLogin;
