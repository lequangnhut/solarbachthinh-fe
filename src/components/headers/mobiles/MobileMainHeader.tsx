import Link from 'next/link';
import MobileHeaderDrawer from './header-drawer/MobileHeaderDrawer';

const MobileMainHeader = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className="flex items-center justify-between pl-4 shadow-md">
        <Link
          href="/"
          className="flex h-[72px] items-center border-r border-solid border-gray-300 pr-4"
        >
          <h2 className="m-0 text-2xl font-bold uppercase text-primary">Bách Thịnh</h2>
        </Link>

        <MobileHeaderDrawer />
      </div>
    </nav>
  );
};

export default MobileMainHeader;
