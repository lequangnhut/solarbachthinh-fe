import Link from 'next/link';
import { NAV_MENU } from '@/constants/menu';
import MobileDropdownNavItem from './MobileDropdownNavItem';

const MobileNavbar = () => {
  return (
    <div className="text-black">
      {NAV_MENU.map((navItem, index) =>
        navItem.isDropdown ? (
          <MobileDropdownNavItem key={index} navItem={navItem} />
        ) : (
          <Link
            key={index}
            href={navItem.link}
            className="flex h-12 w-full items-center justify-start rounded-md px-2 text-base font-normal hover:bg-[#f2f4f6]"
          >
            {navItem.name}
          </Link>
        ),
      )}
    </div>
  );
};

export default MobileNavbar;
