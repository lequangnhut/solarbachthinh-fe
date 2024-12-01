import { ChevronLeft } from 'lucide-react';
import { useAppDispatch } from '@/hooks/store';
import { setHomeProps } from '@/reduxs/HomeSlice';
import BellBtn from '@/components/commons/BellBtn';

const MobileLoginDrawerHeader = () => {
  const dispatch = useAppDispatch();

  const toggleProfile = () => {
    dispatch(setHomeProps({ toggleOpenHeader: false }));
  };

  return (
    <div className="mb-8 flex items-center justify-between py-2 text-black">
      <div onClick={toggleProfile} className="flex cursor-pointer items-center gap-2">
        <ChevronLeft width={18} height={18} />
        <p className="text-sm"> Về trang chính</p>
      </div>

      <div className="flex items-center gap-3">
        <BellBtn />
      </div>
    </div>
  );
};

export default MobileLoginDrawerHeader;
