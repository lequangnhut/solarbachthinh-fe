"use client";

import Cookie from "js-cookie";
import { LockKeyhole } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useMemo } from "react";

import { Button } from "@/components/ui/Button";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import { useAppDispatch, useAppSelector } from "@/hooks/store";
import {
  setAccountOverviewProps,
  resetAccountSecurityProps,
} from "@/reduxs/AccountOverviewSlice";
import { isProduction } from "@/utils";
import { ACCESS_TOKEN } from "@/utils/storage";
import { toast } from "@/components/ui/use-toast";
import { validateFieldEmpty } from "@/utils/validate";
import { changePassword } from "@/apis/change-password.api";

const SecurityChangePassword = () => {
  const route = useRouter();
  const dispatch = useAppDispatch();
  const oldPassword = useAppSelector(
    (state) => state.accountOverview.securities.oldPassword,
  );
  const newPassword = useAppSelector(
    (state) => state.accountOverview.securities.newPassword,
  );
  const securities = useAppSelector(
    (state) => state.accountOverview.securities,
  );
  const errorMsg = useAppSelector((state) => state.accountOverview.errorMsg);
  const loading = useAppSelector((state) => state.accountOverview.loading);
  const checkDisabled = useMemo(() => {
    return (
      !oldPassword ||
      !newPassword ||
      !securities.confirmPassword ||
      !!errorMsg.oldPassword ||
      !!errorMsg.newPassword ||
      !!errorMsg.confirmPassword
    );
  }, [
    oldPassword,
    newPassword,
    securities.confirmPassword,
    errorMsg.oldPassword,
    errorMsg.newPassword,
    errorMsg.confirmPassword,
  ]);

  const checkFieldEmpty = (fieldName: string, fieldValue: string) => {
    let newError = { ...errorMsg };

    if (!fieldValue) {
      newError = {
        ...newError,
        [fieldName]: validateFieldEmpty(fieldName),
      };
    } else {
      newError = { ...newError, [fieldName]: "" };
    }

    return newError;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    let updatedProps = {
      securities: { ...securities, [fieldName]: fieldValue },
      errorMsg,
    };

    if (!fieldValue) {
      updatedProps = {
        ...updatedProps,
        errorMsg: checkFieldEmpty(fieldName, fieldValue),
      };
    } else {
      updatedProps = {
        ...updatedProps,
        errorMsg: {
          ...errorMsg,
        },
      };
    }

    dispatch(setAccountOverviewProps(updatedProps));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      dispatch(setAccountOverviewProps({ loading: true }));
      const data = await changePassword(oldPassword, newPassword);
      if (data.success) {
        toast({
          description: "Đổi mật khẩu thành công",
          status: "success",
        });
        dispatch(resetAccountSecurityProps());
        Cookie.remove(ACCESS_TOKEN);
        route.replace("/login");
      } else {
        toast({
          description: "Mật khẩu cũ không chính xác",
          status: "error",
        });
        dispatch(setAccountOverviewProps({ loading: false }));
      }
    } catch (error) {
      if (!isProduction) console.error("error:", error);
      toast({
        description: "Đổi mật khẩu thất bại",
        status: "error",
      });
    }
  };

  return (
    <div className="mb-3 flex flex-col items-start justify-center gap-4">
      <div className="flex items-center gap-2">
        <LockKeyhole />
        <p className="text-2xl font-semibold">Đổi mật khẩu</p>
      </div>

      <form onSubmit={handleSubmit} className="w-full space-y-8 xl:max-w-[30%]">
        <FormItem className="!mt-4">
          <FormLabel className="text-gray600">Mật khẩu cũ</FormLabel>
          <FormControl>
            <Input
              onChange={handleChange}
              type="password"
              placeholder="Mật khẩu cũ"
              name="oldPassword"
              className="!border-black !py-[22px] !text-base placeholder:text-gray-500 focus:ring-0 focus-visible:!ring-0 focus-visible:ring-offset-0"
              value={oldPassword}
            />
          </FormControl>
          <FormMessage className="text-redBase mt-[4px]">
            {errorMsg.oldPassword}
          </FormMessage>
        </FormItem>

        <FormItem className="!mt-4">
          <div className="flex items-center justify-between">
            <FormLabel className="text-gray600">Mật khẩu mới</FormLabel>
          </div>
          <FormControl>
            <Input
              type="password"
              placeholder="Mật khẩu mới"
              onChange={handleChange}
              name="newPassword"
              className="!border-black !py-[22px] !text-base placeholder:text-gray-500 focus:ring-0 focus-visible:!ring-0 focus-visible:ring-offset-0"
              value={newPassword}
            />
          </FormControl>
          <FormMessage className="text-redBase mt-[4px]">
            {errorMsg.newPassword}
          </FormMessage>
        </FormItem>

        <FormItem className="!mt-4">
          <div className="flex items-center justify-between">
            <FormLabel className="text-gray600">Nhập lại mật khẩu</FormLabel>
          </div>
          <FormControl>
            <Input
              type="password"
              placeholder="Nhập lại mật khẩu"
              onChange={handleChange}
              name="confirmPassword"
              className="!border-black !py-[22px] !text-base placeholder:text-gray-500 focus:ring-0 focus-visible:!ring-0 focus-visible:ring-offset-0"
              value={securities.confirmPassword}
            />
          </FormControl>
          <FormMessage className="mt-[4px] text-red-500">
            {errorMsg.confirmPassword}
          </FormMessage>
        </FormItem>

        <Button
          type="submit"
          variant="default"
          size="lg"
          loading={loading}
          disabled={!!checkDisabled || loading}
          className="h-[50px] w-full rounded-[30px] text-xl font-bold hover:opacity-90 disabled:bg-[#c2c6cc]"
        >
          Lưu thay đổi
        </Button>
      </form>
    </div>
  );
};

export default SecurityChangePassword;
