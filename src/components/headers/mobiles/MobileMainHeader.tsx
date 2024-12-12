import Link from "next/link";
import MobileHeaderDrawer from "./header-drawer/MobileHeaderDrawer";
import MobileHeaderCartBtn from "./header-drawer/MobileHeaderCartBtn";

const MobileMainHeader = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className="flex items-center justify-between px-4 shadow-md">
        <Link
          href="/"
          className="flex h-[72px] items-center border-r border-solid border-gray-300 pr-4"
        >
          <h2 className="m-0 text-lg font-bold uppercase text-primary md:text-2xl">
            Solar Bách Thịnh
          </h2>
        </Link>

        <div className="flex items-center space-x-2">
          <MobileHeaderCartBtn />
          <MobileHeaderDrawer />
        </div>
      </div>
    </nav>
  );
};

export default MobileMainHeader;
