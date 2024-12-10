import { ShoppingCart } from 'lucide-react';
import CartProductDetail from './CartProductDetail';

const CartProducts = () => {
  const products = [
    {
      image: '/assets/images/products/den-led.png',
    },
    {
      image: '/assets/images/products/den-led.png',
    },
  ];

  return (
    <div className="rounded-md border border-solid border-gray-200 bg-white md:col-span-2">
      <div>
        <p className="flex p-3 text-lg font-medium">
          <ShoppingCart className="w-5" />
          &nbsp;Giỏ hàng - 2 sản phẩm
        </p>
        <hr className="w-full" />
      </div>

      {products.map((product, key) => (
        <CartProductDetail image={product.image} key={key} />
      ))}
    </div>
  );
};

export default CartProducts;
