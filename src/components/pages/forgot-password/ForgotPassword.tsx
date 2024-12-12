import Link from "next/link";
import { CircleAlert } from "lucide-react";
import ForgotPasswordForm from "./ForgotPasswordForm";

const ForgotPassword = () => {
  return (
    <div className="m-2 flex min-h-[calc(100vh-60px)] items-center justify-center py-2">
      <div className="h-full w-full rounded-2xl bg-white p-10 shadow-[0_4px_20px_rgba(22,27,43,.06)] md:w-[480px]">
        <h1 className="mb-6 text-2xl font-semibold dark:text-black">
          Đặt lại mật khẩu đăng nhập
        </h1>
        <div className="mb-6 flex w-full items-center gap-2 bg-[#fff7e8] px-3 py-2 text-sm text-[#fa8c16]">
          <CircleAlert color="#fff" size={28} fill="#fa8c16" />
          Quý khách vui lòng không chia sẽ mật khẩu được gửi từ
          solarbachthinh@gmail.com cho bất kì ai.
        </div>

        <ForgotPasswordForm />

        <Link href={"/login"} className="text-sm text-[#f8ac16]">
          Quay về đăng nhập
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
