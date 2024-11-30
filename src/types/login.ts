interface IField {
  email: string;
  password: string;
}

export interface IErrorLoginState {
  value: IField;
  errorMsg: IField;
  loading: boolean;
}

export interface IErrorLoginStateForData {
  value?: IField;
  errorMsg?: IField;
  loading?: boolean;
}
