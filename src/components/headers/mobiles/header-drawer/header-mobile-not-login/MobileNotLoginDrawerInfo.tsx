import Link from "next/link";
import { useAppDispatch } from "@/hooks/store";
import { setHomeProps } from "@/reduxs/HomeSlice";

const MobileNotLoginDrawerInfo = () => {
  const dispatch = useAppDispatch();

  const toggleProfile = () => {
    dispatch(setHomeProps({ toggleOpenHeader: false }));
  };

  return (
    <div className="mb-8 flex items-start justify-between">
      <div>
        <Link href="/login" onClick={toggleProfile} className="cursor-pointer">
          <p className="text-2xl font-semibold">Đăng nhập</p>
        </Link>
        <p className="text-sm">Chào bạn đến với Solar Bách Thịnh</p>
      </div>
    </div>
  );
};

export default MobileNotLoginDrawerInfo;
