import HeaderMobile from './mobiles/HeaderMobile';
import NavbarDesktop from './NavbarDesktop';
import TopBarHeader from './tools/TopBarHeader';

const MainHeader = () => {
  return (
    <>
      <div className="hidden xl:block">
        <TopBarHeader />
        <NavbarDesktop />
      </div>

      <div className="block xl:hidden">
        <HeaderMobile />
      </div>
    </>
  );
};

export default MainHeader;
