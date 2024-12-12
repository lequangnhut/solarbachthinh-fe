import Link from "next/link";
import { ShoppingCart } from "lucide-react";

const HeaderDesktopCart = () => {
  return (
    <Link
      href="/carts"
      className="ml-auto rounded-none bg-primary px-10 py-6 font-semibold text-white transition-all hover:bg-primary-bold"
    >
      <span className="flex">
        Giỏ hàng
        <ShoppingCart className="ml-2" width={22} height={22} />
      </span>
    </Link>
  );
};

export default HeaderDesktopCart;
