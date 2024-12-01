'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/utils';
import { NAV_MENU } from '@/constants/menu';
import HeaderDesktopBtn from './tools/HeaderDesktopBtn';

const HeaderDesktop = () => {
  const pathname = usePathname();

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
          {NAV_MENU.map((navItem, key) => (
            <Link
              href={navItem.link}
              className={cn(
                'py-2 text-gray-700 transition hover:text-primary',
                pathname === navItem.link && 'font-bold text-primary',
              )}
              key={key}
            >
              {navItem.name}
            </Link>
          ))}
        </div>

        <HeaderDesktopBtn />
      </div>
    </nav>
  );
};

export default HeaderDesktop;
