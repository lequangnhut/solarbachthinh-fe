"use client";

import { useSearchParams } from "next/navigation";
import { VerifyType } from "@/constants/auth";
import { VerifyEmail } from "./VerifyEmail";
import VerifyLostPasswordEmail from "./VerifyLostPasswordEmail";

const VerifyPage = () => {
  const searchParams = useSearchParams();
  const verifyType = searchParams.get("type");

  const renderVerifyContent = () => {
    switch (verifyType) {
      case VerifyType.Email:
        return <VerifyEmail />;
      case VerifyType.ForgotPasswordEmail:
        return <VerifyLostPasswordEmail />;
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center overflow-hidden bg-[url('/assets/images/base/carousel-2.jpg')] bg-cover bg-center">
      {renderVerifyContent()}
    </div>
  );
};

export default VerifyPage;
