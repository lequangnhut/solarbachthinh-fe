import { ChangeEvent } from 'react';
import { cn } from '@/utils';
import { Input } from '@/components/ui/Input';
import { setRegisterProps } from '@/reduxs/RegisterSlice';
import { useAppDispatch, useAppSelector } from '@/hooks/store';
import { authValidate, validateFieldEmpty } from '@/utils/validate';
import { FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/Form';

const RegisterFormItem = () => {
  const dispatch = useAppDispatch();
  const value = useAppSelector((state) => state.register.value);
  const errorMsg = useAppSelector((state) => state.register.errorMsg);

  const checkFieldEmpty = (fieldName: string, fieldValue: string) => {
    let newError = { ...errorMsg };

    if (!fieldValue && fieldName !== 'inviteCode') {
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
    const fieldValue = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    let updatedProps = {
      value: { ...value, [fieldName]: fieldValue },
      errorMsg,
    };

    if (!fieldValue) {
      updatedProps = {
        ...updatedProps,
        errorMsg: checkFieldEmpty(fieldName, String(fieldValue)),
      };
    } else {
      const keyMultiLanguage = authValidate(fieldName, String(fieldValue), value.password, '');
      updatedProps = {
        ...updatedProps,
        errorMsg: {
          ...errorMsg,
          [fieldName]: keyMultiLanguage ? keyMultiLanguage : '',
        },
      };
    }

    dispatch(setRegisterProps(updatedProps));
  };

  return (
    <>
      <FormItem className="!mt-3">
        <FormLabel className={cn('text-black', errorMsg.email && 'text-red-500')}>Email</FormLabel>
        <FormControl>
          <Input
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="Vui lòng nhập email"
            className={cn(
              'rounded-lg border !border-black !py-[22px] focus:ring-0 focus-visible:!ring-0 focus-visible:ring-offset-0',
              errorMsg.email && '!border-red-500',
            )}
            value={value.email}
          />
        </FormControl>
        <FormMessage className="mt-[4px] text-red-500">{errorMsg.email}</FormMessage>
      </FormItem>

      <FormItem className="!mt-4">
        <FormLabel className={cn('text-black', errorMsg.fullName && 'text-red-500')}>
          Họ và tên
        </FormLabel>
        <FormControl>
          <Input
            onChange={handleChange}
            type="text"
            name="fullName"
            placeholder="Vui lòng nhập họ và tên"
            className={cn(
              'rounded-lg border !border-black !py-[22px] focus:ring-0 focus-visible:!ring-0 focus-visible:ring-offset-0',
              errorMsg.fullName && '!border-red-500',
            )}
            value={value.fullName}
          />
        </FormControl>
        <FormMessage className="mt-[4px] text-red-500">{errorMsg.fullName}</FormMessage>
      </FormItem>

      <FormItem className="!mt-4">
        <FormLabel className={cn('text-black', errorMsg.fullName && 'text-red-500')}>
          Số điện thoại
        </FormLabel>
        <FormControl>
          <Input
            onChange={handleChange}
            type="text"
            name="phoneNumber"
            placeholder="Vui lòng nhập số điện thoại"
            className={cn(
              'rounded-lg border !border-black !py-[22px] focus:ring-0 focus-visible:!ring-0 focus-visible:ring-offset-0',
              errorMsg.phoneNumber && '!border-red-500',
            )}
            value={value.phoneNumber}
          />
        </FormControl>
        <FormMessage className="mt-[4px] text-red-500">{errorMsg.phoneNumber}</FormMessage>
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
              'rounded-lg border !border-black !py-[22px] focus:ring-0 focus-visible:!ring-0 focus-visible:ring-offset-0',
              errorMsg.password && '!border-red-500',
            )}
            value={value.password}
          />
        </FormControl>
        <FormMessage className="mt-[4px] text-red-500">{errorMsg.password}</FormMessage>
      </FormItem>

      <FormItem className="!mt-4">
        <FormLabel className={cn('text-black', errorMsg.confirmPassword && 'text-red-500')}>
          Nhập lại mật khẩu
        </FormLabel>
        <FormControl>
          <Input
            onChange={handleChange}
            type="password"
            name="confirmPassword"
            placeholder="Vui lòng nhập nhập lại mật khẩu"
            className={cn(
              'rounded-lg border !border-black !py-[22px] focus:ring-0 focus-visible:!ring-0 focus-visible:ring-offset-0',
              errorMsg.confirmPassword && '!border-red-500',
            )}
            value={value.confirmPassword}
          />
        </FormControl>
        <FormMessage className="mt-[4px] text-red-500">{errorMsg.confirmPassword}</FormMessage>
      </FormItem>

      <div className="!mt-4 flex flex-col items-start">
        <span className="mb-1 flex items-center justify-between gap-2">
          <Input
            id="agreement"
            type="checkbox"
            name="checkbox"
            onChange={handleChange}
            checked={value.checkbox}
            className="h-[14px] w-[14px] cursor-pointer appearance-auto !border accent-primary"
          />

          <label htmlFor="agreement" className="text-xs">
            Tôi đã đọc và đồng ý với
            <a href="#" className="text-xs text-primary">
              &nbsp;Thoả thuận người dùng
            </a>
            &nbsp;và&nbsp;
            <a href="#" className="text-xs text-primary">
              Chính sách bảo mật
            </a>
          </label>
        </span>
      </div>
    </>
  );
};

export default RegisterFormItem;
