'use client';

import Link from 'next/link';
import Cookie from 'js-cookie';
import { Copy, User } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/utils';
import { ACCESS_TOKEN } from '@/utils/storage';
import { Button } from '@/components/ui/Button';
import { setUserProps } from '@/reduxs/UserSlice';
import { formatHiddenEmail } from '@/utils/format';
import { USER_ARRAY_MENU } from '@/constants/menu';
import { useHandleCopy } from '@/hooks/useHandleCopy';
import { useAppDispatch, useAppSelector } from '@/hooks/store';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/HoverCard';
import NotificationTool from './tools/NotificationTool';

const UserToolBox = () => {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const [handleCopy] = useHandleCopy();
  const currUser = useAppSelector((state) => state.user.userInfo);

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      Cookie.remove(ACCESS_TOKEN);
      window.location.reload();
    }
    dispatch(setUserProps({ userInfo: null }));
  };

  return (
    currUser && (
      <div className="hidden gap-4 lg:flex">
        <HoverCard openDelay={300}>
          <Link href="/">
            <HoverCardTrigger>
              <User width={22} height={22} className="cursor-pointer text-black" />
            </HoverCardTrigger>
          </Link>
          <HoverCardContent
            className="w-52 px-4 shadow-md data-[state=closed]:duration-300 data-[state=open]:duration-300"
            sideOffset={14}
            side="bottom"
          >
            <div className="flex flex-col items-start font-normal">
              <span className="text-base">{formatHiddenEmail(currUser?.email)}</span>
              <div className="mt-1 flex items-center gap-2 text-gray-400">
                <span className="cursor-text text-sm">UID: {currUser?.id.slice(0, 8)}</span>
                <span className="cursor-pointer" onClick={() => handleCopy(currUser?.id || '')}>
                  <Copy width={14} height={14} />
                </span>
              </div>
            </div>

            <div className="mt-4 flex flex-col">
              {USER_ARRAY_MENU.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    '-mx-2 flex h-12 w-[109%] items-center justify-start rounded-md px-3 text-sm font-normal hover:bg-[#f2f4f6] hover:text-black',
                    pathname.slice(3, pathname.length) === item.href &&
                      'text-blue-500 hover:text-blue-600',
                  )}
                >
                  {item.title}
                </Link>
              ))}

              <Button
                variant={'ghost'}
                className="-mx-2 h-12 w-[109%] justify-start px-3 font-normal hover:bg-[#f2f4f6] hover:text-red-500"
                onClick={handleLogout}
              >
                Đăng xuất
              </Button>
            </div>
          </HoverCardContent>
        </HoverCard>
        <NotificationTool />
      </div>
    )
  );
};

export default UserToolBox;
