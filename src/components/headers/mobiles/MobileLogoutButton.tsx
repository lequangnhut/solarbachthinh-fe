'use client';

import React from 'react';
import Cookie from 'js-cookie';
import { LogOut } from 'lucide-react';
import { ACCESS_TOKEN } from '@/utils/storage';
import { clearUserProps } from '@/reduxs/UserSlice';
import { useAppDispatch, useAppSelector } from '@/hooks/store';

const MobileLogoutButton = () => {
  const dispatch = useAppDispatch();
  const currUser = useAppSelector((state) => state.user.userInfo);

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      Cookie.remove(ACCESS_TOKEN);
      window.location.reload();
    }
    dispatch(clearUserProps());
  };

  return (
    currUser && (
      <div className="flex flex-col gap-6">
        <div className="border-t-[1px] border-solid border-slate-300"></div>
        <div
          className="flex cursor-pointer flex-nowrap items-center text-red-500"
          onClick={handleLogout}
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Đăng xuất</span>
        </div>
      </div>
    )
  );
};

export default MobileLogoutButton;
