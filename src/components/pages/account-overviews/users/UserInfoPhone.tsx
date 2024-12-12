import { useHandleCopy } from "@/hooks/useHandleCopy";
import { formatVietnamPhoneNumber } from "@/utils/format";
import { Copy } from "lucide-react";

const UserInfoPhone = ({ children }: { children: string }) => {
  const [handleCopy] = useHandleCopy();

  return (
    <div className="mt-5 text-sm">
      <p className="text-gray500">Số điện thoại</p>
      <div className="flex items-center gap-2">
        <p>{formatVietnamPhoneNumber(children)}</p>
        <span className="cursor-pointer" onClick={() => handleCopy(children)}>
          <Copy width={14} height={14} />
        </span>
      </div>
    </div>
  );
};

export default UserInfoPhone;
