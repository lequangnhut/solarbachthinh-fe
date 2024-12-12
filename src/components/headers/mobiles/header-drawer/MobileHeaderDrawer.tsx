"use client";

import { useEffect } from "react";
import { Menu } from "lucide-react";
import { MEDIA_QUERY } from "@/constants/common";
import { setHomeProps } from "@/reduxs/HomeSlice";
import { Drawer, DrawerContent } from "@/components/ui/Drawer";
import { useAppDispatch, useAppSelector } from "@/hooks/store";
import MobileHeaderLogin from "./header-mobile-login/MobileHeaderLogin";
import MobileHeaderNotLogin from "./header-mobile-not-login/MobileHeaderNotLogin";

const MobileHeaderDrawer = () => {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector((state) => state.user.userInfo);
  const toggleOpenHeader = useAppSelector(
    (state) => state.home.toggleOpenHeader,
  );

  const onOpenProfile = () => {
    dispatch(setHomeProps({ toggleOpenHeader: true }));
  };

  const onCloseDrawer = () => {
    dispatch(setHomeProps({ toggleOpenHeader: false }));
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > MEDIA_QUERY.MOBILE) {
        onCloseDrawer();
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial width

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="mr-4 block rounded-md border border-solid border-gray-400 p-2 px-3">
      <Drawer open={toggleOpenHeader} direction="right">
        <div className="h-6 w-6">
          <Menu
            className="cursor-pointer text-black"
            width={24}
            height={24}
            onClick={onOpenProfile}
          />
        </div>
        <DrawerContent
          data-vaul-no-drag
          className="h-full rounded-none border-none focus:outline-none"
        >
          {userInfo ? <MobileHeaderLogin /> : <MobileHeaderNotLogin />}
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MobileHeaderDrawer;
