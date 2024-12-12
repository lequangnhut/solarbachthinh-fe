import React from "react";
import { Bell } from "lucide-react";
import { useMediaQuery } from "react-responsive";
import { useAppSelector } from "@/hooks/store";
import { MEDIA_QUERY } from "@/constants/common";

const BellBtn = ({
  width = 24,
  height = 24,
}: {
  width?: number;
  height?: number;
}) => {
  const currUser = useAppSelector((state) => state.user.userInfo);
  const isMobile = useMediaQuery({
    query: `(max-width: ${MEDIA_QUERY.MOBILE}px)`,
  });

  const handleClick = () => {
    if (isMobile) return;
  };

  if (!currUser) return null;

  return (
    <span
      className="relative inline-block cursor-pointer"
      onClick={handleClick}
    >
      <Bell width={width} height={height} className="text-black" />
      <span className="absolute right-0 top-[-1px] h-2 w-2 rounded-full bg-red-500" />
    </span>
  );
};

export default BellBtn;
