export interface IUserInfo {
  id: string;
  email: string;
  fullName: string;
  avatar: string;
  phoneNumber: string;
  provinceCode: string;
  districtCode: string;
  wardCode: string;
  address: string;
}

export interface IUserState {
  loading: boolean;
  userInfo: IUserInfo | null;
  isWaitingTempJwt: boolean;
}

export interface IUserStateForData {
  loading?: boolean;
  userInfo?: IUserInfo | null;
  isWaitingTempJwt?: boolean;
}
