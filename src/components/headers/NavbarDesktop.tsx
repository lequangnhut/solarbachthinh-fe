import Link from 'next/link';
import { NAV_MENU } from '@/constants/menu';
import NavbarDesktopBtn from './tools/NavbarDesktopBtn';

const NavbarDesktop = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className="flex items-center justify-between pl-4 shadow-md">
        <Link
          href="/"
          className="flex h-[72px] items-center border-r border-solid border-gray-300 pr-4"
        >
          <h2 className="m-0 text-2xl font-bold uppercase text-primary">Solar Bách Thịnh</h2>
        </Link>

        <div className="mr-8 flex-grow items-center justify-end space-x-7 font-semibold lg:flex">
          {NAV_MENU.map((item, key) => (
            <Link
              href={item.link}
              className="py-2 text-gray-700 transition hover:text-primary"
              key={key}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <NavbarDesktopBtn />
      </div>
    </nav>
  );
};

export default NavbarDesktop;
