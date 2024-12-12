export interface IAccountOverviewState {
  showTotalValue: boolean;
  securities: {
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
  };
  errorMsg: {
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
  };
  loading: boolean;
  activeStep: number;
}

export interface IAccountOverviewStateForData {
  showTotalValue?: boolean;
  securities?: {
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
  };
  errorMsg?: {
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
  };
  loading?: boolean;
  activeStep?: number;
}
