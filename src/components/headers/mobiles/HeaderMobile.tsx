import Link from 'next/link';
import { MOBILE_NAV_MENU } from '@/constants/menu';
import { cn } from '@/utils';

const HeaderMobile = () => {
  return (
    <div className="fixed bottom-7 left-1/2 z-[100] flex translate-x-[-50%] gap-2 rounded-[99px] border-[2px] border-solid border-orangeBase bg-black/40 px-4 py-2 text-[14px] text-white transition-colors dark:bg-gray-900/40 dark:text-gray-200 sm:px-8 sm:text-[22px] md:hidden">
      {MOBILE_NAV_MENU.map((navItem, index) => (
        <Link
          key={index}
          href={navItem.link}
          className={cn(
            'flex items-center justify-center rounded-full bg-transparent p-3 transition-colors hover:bg-orangeBase',
            navItem.link === '#overview' ? 'active bg-orangeBase' : 'text-current',
          )}
        >
          <navItem.icon className="h-4 w-4" />
        </Link>
      ))}
    </div>
  );
};

export default HeaderMobile;
