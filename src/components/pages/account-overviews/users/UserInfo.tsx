"use client";

import { UserRound } from "lucide-react";
import { useAppSelector } from "@/hooks/store";
import { formatDateByType } from "@/utils/datetime";
import { HH_MM_DD_MM_YYYY } from "@/constants/datetime";
import UserInfoUID from "./UserInfoUID";
import UserInfoPhone from "./UserInfoPhone";

const UserInfo = () => {
  const currUser = useAppSelector((state) => state.user.userInfo);
  if (!currUser) return;

  return (
    <div className="border-b border-solid border-gray-300 px-6 py-[28px]">
      <div className="flex items-center gap-4">
        <div className="rounded-full bg-gray-300 p-3">
          <UserRound />
        </div>
        <div>
          <p className="mb-2 text-2xl font-semibold">
            {currUser?.email.split("@")[0]}
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-col items-start gap-4 sm:flex-row">
        <div className="flex-1">
          <div className="text-sm">
            <p className="text-gray-500">Tài khoản</p>
            <p>{currUser?.email}</p>
          </div>
          <UserInfoUID>{currUser?.id ?? ""}</UserInfoUID>
        </div>

        <div className="flex-1 text-sm">
          <div>
            <p className="text-gray-500">Thời gian đăng ký</p>
            <p>{formatDateByType(currUser?.createdAt, HH_MM_DD_MM_YYYY)}</p>
          </div>
          <UserInfoPhone>{currUser?.phoneNumber ?? ""}</UserInfoPhone>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
