import { ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/hooks/store';
import { setHomeProps } from '@/reduxs/HomeSlice';

interface IProps {
  item: {
    title: string;
    icon: React.ElementType;
    url: string;
  };
}

const MenuHeaderItem = ({ item }: IProps) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const toggleProfile = () => {
    router.push(item.url);
    dispatch(setHomeProps({ toggleOpenHeader: false }));
  };

  return (
    <div onClick={toggleProfile} className="mb-8 flex items-center justify-between text-black">
      <div className="flex items-center gap-2">
        <p className="flex w-6 items-center justify-center">
          {<item.icon width={16} height={16} />}
        </p>
        <p>{item.title}</p>
      </div>
      <ChevronRight width={14} height={24} />
    </div>
  );
};

export default MenuHeaderItem;
