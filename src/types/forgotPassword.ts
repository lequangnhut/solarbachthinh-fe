interface IField {
  verificationEmailCode: string;
  newPassword: string;
  confirmPassword: string;
  email: string;
}

export interface IForgotPasswordState {
  value: IField;
  errorMsg: IField;
  loading: boolean;
}

export interface IForgotPasswordStateForData {
  value?: IField;
  errorMsg?: IField;
  loading?: boolean;
}
