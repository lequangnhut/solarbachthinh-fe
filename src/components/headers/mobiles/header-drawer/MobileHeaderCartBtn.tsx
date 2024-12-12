import Link from "next/link";
import { ShoppingCart } from "lucide-react";

const MobileHeaderCartBtn = () => {
  return (
    <Link href="/carts">
      <div className="block rounded-md border border-solid border-gray-400 p-2 px-3">
        <div className="h-6 w-6">
          <ShoppingCart
            className="cursor-pointer text-black"
            width={24}
            height={24}
          />
        </div>
      </div>
    </Link>
  );
};

export default MobileHeaderCartBtn;
