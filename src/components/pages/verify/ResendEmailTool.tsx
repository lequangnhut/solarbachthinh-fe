"use client";

import { useEffect, useState } from "react";
import { cn } from "@/utils";
import { Button } from "@/components/ui/Button";
import { toast } from "@/components/ui/use-toast";
import { RESEND_EMAIL_TIME } from "@/constants/auth";
import { EMAIL_MUST_LONGER } from "@/constants/errMsg";
import { setRegisterProps } from "@/reduxs/RegisterSlice";
import { resendVerificationEmail } from "@/apis/author.api";
import { useAppDispatch, useAppSelector } from "@/hooks/store";

const ResendEmailTool = () => {
  const dispatch = useAppDispatch();
  const [isActiveSend, setIsActiveSend] = useState<boolean>(false);
  const [countDown, setCountDown] = useState<number>(3);

  const email = useAppSelector((state) => state.register.emailWaitVerify);
  const isResend = useAppSelector((state) => state.register.isResend);
  const loading = useAppSelector((state) => state.register.loading);

  const handleResendEmail = async () => {
    dispatch(setRegisterProps({ loading: true }));
    const res = await resendVerificationEmail(email);
    if (res.success) {
      setIsActiveSend(false);
      setCountDown(RESEND_EMAIL_TIME);
      toast({
        description:
          "Gửi lại email thành công. Vui lòng kiểm tra email của bạn để nhận được liên kết xác minh.",
        status: "success",
        duration: 5000,
      });
      dispatch(setRegisterProps({ isResend: false, loading: false }));
    } else {
      if (res?.response?.message[0] === EMAIL_MUST_LONGER) {
        toast({
          description: "Email không đúng định dạng",
          status: "error",
        });
      } else {
        toast({
          description: "Đã có lỗi xảy ra, vui lòng thử lại",
          status: "error",
        });
      }
    }
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (isResend) {
      intervalId = setInterval(() => {
        setCountDown((prev) => {
          if (prev === 1) {
            setIsActiveSend(true);
            clearInterval(intervalId);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isResend]);

  return (
    <div className="mt-4 flex items-center gap-2">
      <Button
        loading={loading}
        onClick={handleResendEmail}
        disabled={!isActiveSend || loading}
        className={cn(
          "min-w-32 font-normal",
          isActiveSend
            ? "bg-primary text-white hover:bg-primary-bold disabled:opacity-100"
            : "bg-primary text-white hover:bg-primary-bold",
        )}
      >
        <span className="mt-0.5">Gửi lại Mã</span>
      </Button>
      <Button className="h-10 w-32 bg-[#D8DADB] font-normal">
        <span className="mt-0.5">{countDown}s&nbsp;để gửi lại</span>
      </Button>
    </div>
  );
};

export default ResendEmailTool;
