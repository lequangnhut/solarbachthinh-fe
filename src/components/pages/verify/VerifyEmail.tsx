import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { setRegisterProps } from "@/reduxs/RegisterSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/store";
import ResendEmailTool from "./ResendEmailTool";

export const VerifyEmail = () => {
  const dispatch = useAppDispatch();
  const emailWaitVerify = useAppSelector(
    (state) => state.register.emailWaitVerify,
  );
  const isResend = useAppSelector((state) => state.register.isResend);

  const handleDisplayResendEmail = () => {
    dispatch(setRegisterProps({ isResend: true }));
  };

  return (
    <div className="m-2 w-full max-w-[460px] rounded-lg bg-white p-8 shadow-lg">
      <div className="p-3">
        <div className="flex w-full justify-center">
          <Image
            src="/assets/icons/logo.png"
            alt="logo"
            width={100}
            height={100}
            className="mb-4 w-20"
          />
        </div>

        <h5 className="text-center text-2xl font-bold">
          Xác minh bằng Email của bạn
        </h5>

        <hr className="my-5 border-primary" />

        <div className="mb-4 rounded-lg !border !border-[#9ccee7] bg-primary p-[10px] text-center text-black">
          Tài khoản của bạn đã được gửi và&nbsp;
          <span className="font-bold">đang chờ xác minh email</span>.
        </div>
        <p className="mb-4 text-sm text-black">
          Chúng tôi đã gửi một email đến
          <span className="font-bold">&nbsp;{emailWaitVerify}</span>
          với một liên kết để kích hoạt tài khoản của bạn. Để hoàn tất quá trình
          đăng ký, vui lòng nhấp vào liên kết xác nhận trong email.
        </p>
        <p className="mb-4 text-sm text-black">
          Nếu bạn không nhận được email xác nhận, vui lòng vào email và
          <span className="font-bold">
            &nbsp;kiểm tra hộp thư rác của bạn và tìm tin nhắn được gửi từ
            solarbachthinh@gmail.com.
          </span>
        </p>
        <span className="text-sm text-black">
          Nếu bạn cần bất kỳ sự hỗ trợ nào, vui lòng
          <Link href="/coming-soon" className="text-primary">
            &nbsp;liên hệ chúng tôi
          </Link>
        </span>
        <br />
        <span className="text-sm text-black">
          Quay lại trang
          <Link href="/login" className="ml-1 text-primary">
            đăng nhập
          </Link>
        </span>
        <br />
        {isResend ? (
          <ResendEmailTool />
        ) : (
          <span className="text-sm text-black">
            Bạn chưa nhận được mã xác nhận ?
            <Button
              variant={"ghost"}
              onClick={handleDisplayResendEmail}
              className="ml-1 px-0 text-primary hover:bg-transparent hover:text-primary-bold"
            >
              nhấn vào đây
            </Button>
          </span>
        )}
      </div>

      <div className="py-6 text-center text-sm text-black">
        <p>
          &copy;&nbsp;2024&nbsp;
          <Link href="https://traveltouris.id.vn/" className="text-primary">
            solarbachthinh.com
          </Link>
          &nbsp;all rights reserved
        </p>
      </div>
    </div>
  );
};
