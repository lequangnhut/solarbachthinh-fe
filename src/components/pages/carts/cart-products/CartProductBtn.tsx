import { Share2, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const CartProductBtn = () => {
  return (
    <div className="space-x-2">
      <Button className="h-auto w-auto bg-red-500 p-2 hover:bg-red-600">
        <Trash2 className="w-4 md:w-5" />
      </Button>
      <Button className="h-auto w-auto bg-primary p-2 hover:bg-primary-bold">
        <Share2 className="w-4 md:w-5" />
      </Button>
    </div>
  );
};

export default CartProductBtn;
