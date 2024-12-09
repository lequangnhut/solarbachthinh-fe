import CartDetail from './cart-detail/CartDetail';
import CartProducts from './cart-products/CartProducts';

const MainCart = () => {
  return (
    <div className="bg-[#F6F7F8]">
      <div className="container py-10">
        <div className="grid grid-cols-1 gap-5 py-10 md:grid-cols-3">
          <CartProducts />
          <CartDetail />
        </div>
      </div>
    </div>
  );
};

export default MainCart;
