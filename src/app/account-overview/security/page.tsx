import SecurityChangePassword from "@/components/pages/account-overviews/securities/SecurityChangePassword";

const SecurityPage = async () => {
  return (
    <div className="w-full px-6 py-8">
      <h1 className="text-[32px] font-bold">Bảo mật</h1>

      <div className="mt-6 rounded-xl border border-solid border-gray-300 px-6 py-8">
        <SecurityChangePassword />
      </div>
    </div>
  );
};

export default SecurityPage;
