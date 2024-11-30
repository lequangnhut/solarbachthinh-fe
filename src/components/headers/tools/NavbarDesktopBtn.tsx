import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const NavbarDesktopBtn = () => {
  return (
    <Link
      href="/login"
      className="ml-auto rounded-none bg-primary px-10 py-6 font-semibold text-white transition-all hover:bg-primary-bold"
    >
      <span className="flex">
        Đăng nhập
        <ArrowRight className="ml-3" />
      </span>
    </Link>
  );
};

export default NavbarDesktopBtn;
