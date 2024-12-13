"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useMemo } from "react";
import { cn, isProduction } from "@/utils";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { VerifyType } from "@/constants/auth";
import { forgotPassword } from "@/apis/author.api";
import { useToast } from "@/components/ui/use-toast";
import { validateFieldEmpty } from "@/utils/validate";
import { useAppDispatch, useAppSelector } from "@/hooks/store";
import { setForgotPasswordProps } from "@/reduxs/ForgotPasswordSlice";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import { USER_NOT_FOUND } from "@/constants/errMsg";

const ForgotPasswordForm = () => {
  const router = useRouter();
  const { toast } = useToast();
  const dispatch = useAppDispatch();
  const value = useAppSelector((state) => state.forgotPassword.value);
  const errorMsg = useAppSelector((state) => state.forgotPassword.errorMsg);
  const loading = useAppSelector((state) => state.forgotPassword.loading);

  const checkDisabled = useMemo(() => {
    return !!errorMsg.email || !value.email;
  }, [errorMsg.email, value.email]);

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
      value: { ...value, [fieldName]: fieldValue },
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

    dispatch(setForgotPasswordProps(updatedProps));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      dispatch(setForgotPasswordProps({ loading: true }));
      const values = {
        email: value.email.trim(),
      };
      const res = await forgotPassword(values);

      if (res.success) {
        router.push(`/verify?type=${VerifyType.ForgotPasswordEmail}`);
      } else {
        if (res?.message === USER_NOT_FOUND) {
          toast({
            description: "Email chưa được đăng ký",
            status: "error",
          });
        } else {
          toast({
            description: "Đã có lỗi xảy ra, vui lòng thử lại sau",
            status: "error",
          });
        }
      }
      dispatch(setForgotPasswordProps({ loading: false }));
    } catch (error) {
      dispatch(setForgotPasswordProps({ loading: false }));
      if (!isProduction) console.log(error);
    }
  };

  return (
    <form className="mb-4 space-y-8" onSubmit={handleSubmit}>
      <FormItem className="!mt-4">
        <FormLabel
          className={cn("text-gray-600", errorMsg.email && "text-red-500")}
        >
          Email
        </FormLabel>
        <FormControl>
          <Input
            onChange={handleChange}
            type="text"
            placeholder="Vui lòng nhập Email"
            name="email"
            className={cn(
              "!border-black !py-[22px] !text-base focus:ring-0 focus-visible:!ring-0 focus-visible:ring-offset-0",
              errorMsg.email && "border-red-500",
            )}
            value={value.email}
          />
        </FormControl>
        <FormMessage className="mt-[4px] text-red-500">
          {errorMsg.email}
        </FormMessage>
      </FormItem>

      <Button
        type="submit"
        variant="default"
        size="lg"
        loading={loading}
        className="h-[50px] w-full rounded-[30px] bg-primary text-xl font-medium hover:bg-primary-bold disabled:bg-[#c2c6cc]"
        disabled={checkDisabled || loading}
      >
        Tiếp theo
      </Button>
    </form>
  );
};

export default ForgotPasswordForm;
