import { Minus, Plus } from 'lucide-react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { FormControl } from '@/components/ui/Form';

const CartProductQuantity = () => {
  return (
    <div className="col-span-1 p-2 px-0">
      <div className="mb-3">
        <h2 className="mb-3 text-lg font-semibold text-gray-500">Số lượng</h2>

        <div className="mb-6 flex space-x-2">
          <Button className="h-9 w-11 rounded-md bg-primary hover:bg-primary-bold">
            <Minus className="text-white" />
          </Button>

          <FormControl>
            <Input
              type="number"
              name="quantity"
              placeholder="1"
              className="h-9 w-24 rounded-lg border !border-gray-300 focus:ring-0 focus-visible:!ring-0 focus-visible:ring-offset-0"
            />
          </FormControl>

          <Button className="h-9 w-11 rounded-md bg-primary hover:bg-primary-bold">
            <Plus className="text-white" />
          </Button>
        </div>

        <div className="space-y-3 text-gray-500 md:place-items-end">
          <p className="font-medium">
            <span>Đơn giá:&nbsp;</span>
            <span>450.000 đ</span>
          </p>
          <p className="font-medium">
            <span>Thành tiền:&nbsp;</span>
            <span>450.000 đ</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartProductQuantity;
