import Link from 'next/link';
import CartProductBtn from './CartProductBtn';

const CartProductInformation = () => {
  return (
    <div className="col-span-2 p-2 px-0">
      <Link className="text-black" href="/" title="Sản phẩm đèn năng lượng mặt trời SOKOYO SOLO">
        <div className="space-y-5">
          <h2 className="text-lg font-semibold">ĐÈN NĂNG LƯỢNG MẶT TRỜI SOKOYO SOLO</h2>
          <p className="font-medium">
            <span>Hãng:&nbsp;</span>
            <span>Sokoyo</span>
          </p>
          <p className="font-medium">
            <span>Công suất:&nbsp;</span>
            <span>15W</span>
          </p>
          <p className="font-medium">
            <span>Kho:&nbsp;</span>
            <span>29</span>
          </p>
          <CartProductBtn />
        </div>
      </Link>
    </div>
  );
};

export default CartProductInformation;
