"use client";

import React from "react";
import { Copy } from "lucide-react";

import { useHandleCopy } from "@/hooks/useHandleCopy";
import { formatTrxId } from "@/utils/format";

const UserInfoUID = ({ children }: { children: string }) => {
  const [handleCopy] = useHandleCopy();

  return (
    <div className="mt-5 text-sm">
      <p className="text-gray500">UID</p>
      <div className="flex items-center gap-2">
        <p>{formatTrxId(children)}</p>
        <span className="cursor-pointer" onClick={() => handleCopy(children)}>
          <Copy width={14} height={14} />
        </span>
      </div>
    </div>
  );
};

export default UserInfoUID;
