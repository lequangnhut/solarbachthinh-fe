import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import CartProductQuantity from './CartProductQuantity';
import CartProductInformation from './CartProductInformation';

const CartProducts = () => {
  return (
    <div className="rounded-md border border-solid border-gray-200 bg-white md:col-span-2">
      <div>
        <p className="flex p-3 text-lg font-medium">
          <ShoppingCart className="w-5" />
          &nbsp;Giỏ hàng - 2 sản phẩm
        </p>
        <hr className="w-full" />
      </div>

      <div className="mx-auto max-w-screen-lg px-4 py-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="col-span-1 w-56 p-2 px-0">
            <Image
              alt="product-image"
              className="h-auto w-full"
              src="/assets/images/products/den-led.png"
              width={100}
              height={100}
            />
          </div>

          <CartProductInformation />
          <CartProductQuantity />
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
