import Image from 'next/image';
import CartProductQuantity from './CartProductQuantity';
import CartProductInformation from './CartProductInformation';

interface IProps {
  image: string;
}

const CartProductDetail = ({ image }: IProps) => {
  return (
    <div className="mx-auto max-w-screen-lg px-4 py-4">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
        <div className="col-span-1 w-56 p-2 px-0">
          <Image
            alt="product-image"
            className="h-auto w-full"
            src={image}
            width={100}
            height={100}
          />
        </div>

        <CartProductInformation />
        <CartProductQuantity />
        <hr className="col-span-2 w-full lg:col-span-4" />
      </div>
    </div>
  );
};

export default CartProductDetail;
