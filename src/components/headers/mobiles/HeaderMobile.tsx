import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/Sheet';
import MobileUserBox from './MobileUserBox';
import MobileLogoutButton from './MobileLogoutButton';

const NavbarDesktop = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className="flex items-center justify-between pl-4 shadow-md">
        <Link
          href="/"
          className="flex h-[72px] items-center border-r border-solid border-gray-300 pr-4"
        >
          <h2 className="m-0 text-2xl font-bold uppercase text-primary">Bách Thịnh</h2>
        </Link>

        <div className="mr-7 block rounded-md border border-solid border-gray-400 p-2 px-3.5">
          <Sheet>
            <SheetTrigger asChild>
              <span className="text-blackBase cursor-pointer">
                <Menu width={22} height={22} />
              </span>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto">
              <div className="mt-4 flex flex-col gap-6 pt-4">
                <MobileUserBox />
                <div className="border-t-[1px] border-solid border-slate-300"></div>
                <MobileLogoutButton />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default NavbarDesktop;
