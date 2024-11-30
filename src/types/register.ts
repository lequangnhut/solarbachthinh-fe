interface IField {
  email: string;
  phoneNumber: string;
  password: string;
  fullName: string;
  confirmPassword: string;
  checkbox: boolean;
}

export interface IRegisterState {
  value: IField;
  errorMsg: IField;
  loading: boolean;
  isVerifyEmail: boolean;
}

export interface IRegisterStateForData {
  value?: IField;
  errorMsg?: IField;
  loading?: boolean;
  isVerifyEmail?: boolean;
}
