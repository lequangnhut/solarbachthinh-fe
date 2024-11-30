import {
  passwordRegexOneLowerLetter,
  passwordRegexOneNumber,
  passwordRegexOneSpecialCharacter,
  passwordRegexOneUpperLetter,
  passwordRegexNoSpace,
  verifyCodeRegex,
  emailRegex,
} from './regex';

const validatePassword = (
  fieldValue: string,
  valueOldPassword?: string,
  valuePassword?: string,
) => {
  if (fieldValue.length < 8) {
    return 'Mật khẩu phải có ít nhất 8 ký tự';
  } else if (!passwordRegexOneLowerLetter.test(fieldValue)) {
    return 'Mật khẩu phải chứa ít nhất một chữ cái viết thường';
  } else if (!passwordRegexOneUpperLetter.test(fieldValue)) {
    return 'Mật khẩu phải chứa ít nhất một chữ cái viết hoa';
  } else if (!passwordRegexOneNumber.test(fieldValue)) {
    return 'Mật khẩu phải chứa ít nhất một số';
  } else if (!passwordRegexOneSpecialCharacter.test(fieldValue)) {
    return 'Mật khẩu phải chứa ít nhất một ký tự đặc biệt';
  } else if (fieldValue === valueOldPassword || fieldValue === valuePassword) {
    return 'Mật khẩu mới không được trùng với mật khẩu cũ';
  } else if (!passwordRegexNoSpace.test(fieldValue)) {
    return 'Mật khẩu không được chứa khoảng trắng';
  }
  return '';
};

export const validateFieldEmpty = (fieldName: string) => {
  if (fieldName === 'email') {
    return 'Vui lòng nhập email của bạn';
  } else if (fieldName === 'password') {
    return 'Vui lòng nhập mật khẩu của bạn';
  } else if (fieldName === 'confirmPassword') {
    return 'Vui lòng nhập mật khẩu của bạn';
  } else if (fieldName === 'fullName') {
    return 'Vui lòng nhập họ và tên của bạn';
  }
};

export const authValidate = (
  fieldName: string,
  fieldValue: string,
  valuePassword?: string,
  valueOldPassword?: string,
) => {
  let validateErrMsg = '';

  if (fieldName === 'password' || fieldName === 'newPassword' || fieldName === 'oldPassword') {
    validateErrMsg = validatePassword(fieldValue, valueOldPassword, valuePassword);
  }

  if (fieldName === 'confirmPassword') {
    if (fieldValue !== valuePassword) {
      validateErrMsg = 'Xác nhận mật khẩu không đúng';
    } else {
      validateErrMsg = '';
    }
  } else if (fieldName === 'checkbox') {
    if (String(fieldValue) === '' || String(fieldValue) === 'false')
      validateErrMsg = 'Vui lòng đồng ý với các điều khoản và chính sách của chúng tôi';
  }

  if (fieldName === 'verificationEmailCode') {
    if (!verifyCodeRegex.test(fieldValue)) {
      validateErrMsg = 'Vui lòng nhập mã xác minh Email';
    } else {
      validateErrMsg = '';
    }
  }

  if (fieldName === 'email') {
    if (!emailRegex.test(fieldValue)) {
      validateErrMsg = 'Vui lòng nhập email hợp lệ';
    }
  }

  return validateErrMsg;
};

export const validateAuthCode = (fieldName: string) => {
  const errorMessages: Record<string, string> = {
    unauthorized: 'Email hoặc mật khẩu không chính xác',
    not_found: 'Không tìm thấy tài khoản',
    user_not_verified: 'Tài khoản chưa được xác minh',
    email_already_exists: 'Email của bạn đã tồn tại',
    old_password_incorrect: 'Mật khẩu cũ không chính xác',
  };

  return errorMessages[fieldName] || 'Mã lỗi không xác định';
};
