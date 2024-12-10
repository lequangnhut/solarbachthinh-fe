import CartDetail from './cart-detail/CartDetail';
import CartProducts from './cart-products/CartProducts';

const MainCart = () => {
  return (
    <div className="bg-[#F6F7F8]">
      <div className="m-3 mb-20 py-10 md:container">
        <div className="grid grid-cols-1 space-y-4 py-10 lg:grid-cols-1 xl:grid-cols-3 xl:space-x-4 xl:space-y-0">
          <div className="xl:col-span-2">
            <CartProducts />
          </div>
          <div className="self-start">
            <CartDetail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCart;
