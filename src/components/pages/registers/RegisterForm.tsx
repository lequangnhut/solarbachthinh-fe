'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEvent, useMemo } from 'react';
import { isProduction } from '@/utils';
import { register } from '@/apis/author.api';
import { Button } from '@/components/ui/Button';
import { validateAuthCode } from '@/utils/validate';
import { useToast } from '@/components/ui/use-toast';
import { setRegisterProps } from '@/reduxs/RegisterSlice';
import { useAppDispatch, useAppSelector } from '@/hooks/store';
import RegisterFormItem from './RegisterFormItem';

const RegisterForm = () => {
  const { toast } = useToast();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const value = useAppSelector((state) => state.register.value);
  const errorMsg = useAppSelector((state) => state.register.errorMsg);
  const loading = useAppSelector((state) => state.register.loading);

  const checkDisabled = useMemo(() => {
    return (
      !!errorMsg.email ||
      !!errorMsg.fullName ||
      !!errorMsg.password ||
      !!errorMsg.phoneNumber ||
      !!errorMsg.confirmPassword ||
      !!errorMsg.checkbox ||
      !value.email ||
      !value.fullName ||
      !value.password ||
      !value.phoneNumber ||
      !value.confirmPassword ||
      !value.checkbox
    );
  }, [errorMsg, value]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      dispatch(setRegisterProps({ loading: true }));
      const values = {
        email: value.email.trim(),
        fullName: value.fullName.trim(),
        password: value.password.trim(),
        phoneNumber: value.phoneNumber.trim(),
      };

      const res = await register(values);

      if (res.success) {
        toast({
          description: 'Đăng ký tài khoản thành công',
          status: 'success',
        });
        router.push('/verify');
        dispatch(setRegisterProps({ isVerifyEmail: true }));
      } else {
        toast({
          description: validateAuthCode(res.code),
          status: 'error',
        });
      }

      dispatch(setRegisterProps({ loading: false }));
    } catch (error) {
      dispatch(setRegisterProps({ loading: false }));
      if (!isProduction) console.log(error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center overflow-hidden bg-[url('/assets/images/base/carousel-2.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="m-2 mt-10 w-full max-w-md rounded-lg bg-white p-8 shadow-lg md:mt-16">
        <h2 className="mb-6 text-center text-2xl font-bold">Đăng ký</h2>
        <form className="space-y-8" method="post" onSubmit={handleSubmit}>
          <RegisterFormItem />

          <Button
            type="submit"
            variant="default"
            size="lg"
            className="h-11 w-full bg-primary hover:bg-primary-bold"
            disabled={checkDisabled || loading}
            loading={loading}
          >
            Đăng ký ngay
          </Button>

          <p className="mt-4 text-center text-xs">
            <span>Bạn đã có tài khoản?&nbsp;</span>
            <Link href="/login" className="text-primary hover:underline">
              Đăng nhập
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
