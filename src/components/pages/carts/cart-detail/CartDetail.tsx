import Link from 'next/link';
import { ReceiptText } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import CartDetailInformation from './CartDetailInformation';

const CartDetail = () => {
  return (
    <div className="rounded-md border border-solid border-gray-200 bg-white">
      <div>
        <p className="flex items-center p-3 text-lg font-medium">
          <ReceiptText className="w-5" />
          &nbsp;Chi tiết đơn hàng
        </p>
        <hr />
      </div>
      <CartDetailInformation />
      <div className="p-4">
        <Link href="/carts/information">
          <Button
            type="submit"
            className="w-full rounded-lg bg-primary py-2 text-center text-white hover:bg-primary-bold"
          >
            Tiến hành thanh toán
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CartDetail;
