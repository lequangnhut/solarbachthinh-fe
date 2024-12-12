import Link from "next/link";
import Image from "next/image";

const VerifyLostPasswordEmail = () => {
  return (
    <div className="boxShadow mx-auto flex w-[450px] max-w-full flex-col rounded-xl border bg-white text-[14.5px]">
      <div className="p-6">
        <div className="flex w-full justify-center">
          <Image
            src={`/assets/icons/logo.png`}
            alt="logo"
            width={80}
            height={80}
            className="mb-3"
          />
        </div>

        <h5 className="text-center text-[21.8px] font-bold text-black">
          Kiểm tra email của bạn
        </h5>

        <hr className="my-5 border-primary" />

        <div className="mb-4 rounded-lg !border !border-[#9ccee7] bg-primary p-[10px] text-center text-black">
          Bạn đã yêu cầu &apos;Khôi phục mật khẩu&apos; thành công.
        </div>
        <p className="mb-4 text-[14.5px] text-black">
          Nếu địa chỉ email thuộc về một tài khoản đã biết, mật khẩu khôi phục
          sẽ được gửi cho bạn trong vòng vài phút tiếp theo.
        </p>

        <ul className="mb-4 list-disc pl-10">
          <li className="mb-3">
            Nếu bạn vẫn chưa nhận được email &apos;Khôi phục mật khẩu&apos;, vui
            lòng kiểm tra thư mục{" "}
            <span className="font-bold">thư rác của bạn.</span>
          </li>
          <li>
            Hoặc bạn có thể yêu cầu khôi phục lại mật khẩu mới sau 30 giây.
          </li>
        </ul>
        <span className="text-black">
          Nếu bạn cần bất kỳ sự hỗ trợ nào, vui lòng{" "}
          <Link href="/coming-soon" className="text-primary">
            liên hệ với chúng tôi
          </Link>
        </span>
        <br />
        <span className="text-black">
          Quay lại trang
          <Link href="/login" className="ml-1 text-primary">
            Đăng nhập
          </Link>
        </span>
      </div>
    </div>
  );
};

export default VerifyLostPasswordEmail;
