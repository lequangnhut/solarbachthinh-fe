import CustomComingSoon from "@/components/commons/CustomComingSoon";
import UserInfo from "@/components/pages/account-overviews/users/UserInfo";

const AccountOverViewPage = () => {
  return (
    <div className="w-full">
      <UserInfo />
      <div className="px-3 py-4">
        <div className="flex h-[90vh] w-full items-center justify-center">
          <CustomComingSoon />
        </div>
      </div>
    </div>
  );
};

export default AccountOverViewPage;
