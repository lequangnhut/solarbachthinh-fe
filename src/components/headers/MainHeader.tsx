import HeaderDesktop from "./HeaderDesktop";
import MobileMainHeader from "./mobiles/MobileMainHeader";
import TopBarHeader from "./tools/TopBarHeader";

const MainHeader = () => {
  return (
    <>
      <div className="hidden xl:block">
        <TopBarHeader />
        <HeaderDesktop />
      </div>

      <div className="block xl:hidden">
        <MobileMainHeader />
      </div>
    </>
  );
};

export default MainHeader;
