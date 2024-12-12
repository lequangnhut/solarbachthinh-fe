import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useAppDispatch } from "@/hooks/store";
import { setHomeProps } from "@/reduxs/HomeSlice";

const MobileNotLoginDrawerHeader = () => {
  const dispatch = useAppDispatch();

  const toggleProfile = () => {
    dispatch(setHomeProps({ toggleOpenHeader: false }));
  };

  return (
    <div className="mb-8 flex items-center justify-between py-2">
      <div
        onClick={toggleProfile}
        className="flex cursor-pointer items-center gap-2"
      >
        <ChevronLeft width={18} height={18} />
        <p className="text-sm"> Về trang chính</p>
      </div>

      <Link
        onClick={toggleProfile}
        href="/register"
        className="flex cursor-pointer items-center gap-2"
      >
        <p className="text-sm">Đăng ký</p>
        <ChevronRight width={18} height={18} />
      </Link>
    </div>
  );
};

export default MobileNotLoginDrawerHeader;
