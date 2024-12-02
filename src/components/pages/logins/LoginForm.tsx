'use client';

import Cookies from 'js-cookie';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useMemo } from 'react';
import { login } from '@/apis/author.api';
import { cn, isProduction } from '@/utils';
import { Input } from '@/components/ui/Input';
import { ACCESS_TOKEN } from '@/utils/storage';
import { Button } from '@/components/ui/Button';
import { setUserProps } from '@/reduxs/UserSlice';
import { setLoginProps } from '@/reduxs/LoginSlice';
import { useToast } from '@/components/ui/use-toast';
import { useAppDispatch, useAppSelector } from '@/hooks/store';
import { authValidate, validateAuthCode, validateFieldEmpty } from '@/utils/validate';
import { FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/Form';

const LoginForm = () => {
  const { toast } = useToast();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const value = useAppSelector((state) => state.login.value);
  const errorMsg = useAppSelector((state) => state.login.errorMsg);
  const loading = useAppSelector((state) => state.login.loading);

  const checkDisabled = useMemo(() => {
    return !!errorMsg.email || !!errorMsg.password || !value.email || !value.password;
  }, [errorMsg.email, value.email, errorMsg.password, value.password]);

  const checkFieldEmpty = (fieldName: string, fieldValue: string) => {
    let newError = { ...errorMsg };

    if (!fieldValue) {
      newError = {
        ...newError,
        [fieldName]: validateFieldEmpty(fieldName),
      };
    } else {
      newError = { ...newError, [fieldName]: '' };
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
      const keyMultiLanguage = authValidate(fieldName, fieldValue, value.password);
      updatedProps = {
        ...updatedProps,
        errorMsg: {
          ...errorMsg,
          [fieldName]: keyMultiLanguage ? keyMultiLanguage : '',
        },
      };
    }

    dispatch(setLoginProps(updatedProps));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      dispatch(setLoginProps({ loading: true }));
      const values = {
        email: value.email.trim(),
        password: value.password.trim(),
      };
      const res = await login(values);

      if (res.success) {
        Cookies.set(ACCESS_TOKEN, res.data.access_token, {
          expires: 365,
        });
        router.push('/');
        dispatch(setUserProps({ userInfo: res.data.user }));
        toast({
          description: 'Đăng nhập thành công',
          status: 'success',
        });
      } else {
        toast({
          description: validateAuthCode(res.code),
          status: 'error',
        });
      }

      dispatch(setLoginProps({ loading: false }));
    } catch (error) {
      dispatch(setLoginProps({ loading: false }));
      if (!isProduction) console.log(error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center overflow-hidden bg-[url('/assets/images/base/carousel-2.jpg')] bg-cover bg-center">
      <div className="m-2 mt-10 w-full max-w-md rounded-lg bg-white p-8 shadow-lg md:mt-16">
        <h2 className="mb-6 text-center text-2xl font-bold">Đăng nhập</h2>
        <form className="space-y-8" method="post" onSubmit={handleSubmit}>
          <FormItem className="!mt-4">
            <FormLabel className={cn('text-black', errorMsg.email && 'text-red-500')}>
              Email
            </FormLabel>
            <FormControl>
              <Input
                onChange={handleChange}
                type="email"
                name="email"
                placeholder="Vui lòng nhập email"
                className={cn(
                  'rounded-lg border !border-[#e5e7eb] !py-[22px] focus:ring-0 focus-visible:!ring-0 focus-visible:ring-offset-0',
                  errorMsg.email && '!border-red-500',
                )}
                value={value.email}
              />
            </FormControl>
            <FormMessage className="mt-[4px] text-red-500">{errorMsg.email}</FormMessage>
          </FormItem>

          <FormItem className="!mt-4">
            <FormLabel className={cn('text-black', errorMsg.password && 'text-red-500')}>
              Mật khẩu
            </FormLabel>
            <FormControl>
              <Input
                onChange={handleChange}
                type="password"
                name="password"
                placeholder="Vui lòng nhập mật khẩu"
                className={cn(
                  'rounded-lg border !border-[#e5e7eb] !py-[22px] focus:ring-0 focus-visible:!ring-0 focus-visible:ring-offset-0',
                  errorMsg.password && '!border-red-500',
                )}
                value={value.password}
              />
            </FormControl>
            <FormMessage className="mt-[4px] text-red-500">{errorMsg.password}</FormMessage>
          </FormItem>

          <div className="!mt-4 mb-6 flex items-center justify-between">
            <label className="flex items-center">
              <Input
                id="agreement"
                type="checkbox"
                name="checkbox"
                className="h-[14px] w-[14px] cursor-pointer appearance-auto !border accent-primary"
              />
              <span className="ml-1 text-sm">Nhớ mật khẩu</span>
            </label>
          </div>

          <Button
            type="submit"
            variant="default"
            size="lg"
            className="h-11 w-full"
            disabled={checkDisabled || loading}
            loading={loading}
          >
            Đăng nhập
          </Button>

          <p className="mt-4 text-center text-xs">
            Bạn chưa có tài khoản?&nbsp;
            <Link href="/register" className="text-primary hover:underline">
              Đăng ký ngay
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
