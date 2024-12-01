'use client';

import { useAppSelector } from '@/hooks/store';
import BrandName from '../brands/BrandName';
import HeaderDesktopBtn from './tools/HeaderDesktopBtn';
import HeaderDesktopMenu from './tools/HeaderDesktopMenu';
import HeaderDesktopCart from './tools/HeaderDesktopCart';

const HeaderDesktop = () => {
  const currUser = useAppSelector((state) => state.user.userInfo);

  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className="flex items-center justify-between pl-4 shadow-md">
        <BrandName />
        <HeaderDesktopMenu />
        {currUser ? <HeaderDesktopCart /> : <HeaderDesktopBtn />}
      </div>
    </nav>
  );
};

export default HeaderDesktop;
