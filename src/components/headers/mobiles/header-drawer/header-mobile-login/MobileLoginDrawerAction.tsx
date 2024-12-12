import React from "react";
import Cookie from "js-cookie";
import { Button } from "@/components/ui/Button";
import { ACCESS_TOKEN } from "@/utils/storage";
import { useAppDispatch } from "@/hooks/store";
import { setUserProps } from "@/reduxs/UserSlice";
import { setHomeProps } from "@/reduxs/HomeSlice";

const MobileLoginDrawerAction = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      Cookie.remove(ACCESS_TOKEN);
      window.location.reload();
    }
    dispatch(setUserProps({ userInfo: null }));
    dispatch(setHomeProps({ toggleOpenHeader: false }));
  };

  return (
    <Button
      onClick={handleLogout}
      variant="outline"
      className="mb-6 h-10 w-full rounded-[4px] border-black text-black"
    >
      Đăng xuất
    </Button>
  );
};

export default MobileLoginDrawerAction;
