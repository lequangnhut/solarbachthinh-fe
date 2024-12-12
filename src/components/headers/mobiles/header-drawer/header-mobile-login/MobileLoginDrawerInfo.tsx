import Link from "next/link";
import { ChevronRight, Copy, Mail } from "lucide-react";
import { setHomeProps } from "@/reduxs/HomeSlice";
import { useHandleCopy } from "@/hooks/useHandleCopy";
import { useAppDispatch, useAppSelector } from "@/hooks/store";

const MobileLoginDrawerInfo = () => {
  const [handleCopy] = useHandleCopy();
  const userInfo = useAppSelector((state) => state.user.userInfo);

  const dispatch = useAppDispatch();
  const toggleProfile = () => {
    dispatch(setHomeProps({ toggleOpenHeader: false }));
  };

  if (!userInfo) return;

  return (
    <div className="mb-8 flex items-start justify-between text-black">
      <div>
        <p className="text-2xl">Hồ sơ</p>
        <div className="flex items-center gap-1 text-sm">
          <Mail width={16} height={16} />
          <p className="my-2">{userInfo?.email}</p>
        </div>
        <div className="flex items-center gap-1 text-sm">
          <p>UID: {userInfo.id.slice(0, 8)}</p>
          <span
            className="cursor-pointer"
            onClick={() => handleCopy(userInfo.id || "")}
          >
            <Copy width={16} height={16} />
          </span>
        </div>
      </div>
      <Link
        onClick={toggleProfile}
        href="/account-overview"
        className="flex items-center gap-1 text-sm text-primary"
      >
        <p>Tổng quan</p>
        <ChevronRight />
      </Link>
    </div>
  );
};

export default MobileLoginDrawerInfo;
