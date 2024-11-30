import Link from 'next/link';
import { NAV_MENU } from '@/constants/menu';

const MobileUserBox = () => {
  return (
    <div className="border-bgray500 block border-solid lg:hidden">
      <div className="text-black">
        {NAV_MENU.map((navItem, index) => (
          <Link
            key={index}
            href={navItem.link}
            className="flex h-12 w-full items-center justify-start rounded-md px-2 text-base font-normal hover:bg-[#f2f4f6]"
          >
            {navItem.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileUserBox;
