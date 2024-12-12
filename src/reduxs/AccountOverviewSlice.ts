import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IAccountOverviewState,
  IAccountOverviewStateForData,
} from "@/types/accountOverview";

const initialState: IAccountOverviewState = {
  showTotalValue: false,
  securities: {
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  },
  errorMsg: {
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  },
  loading: false,
  activeStep: 0,
};

const slice = createSlice({
  name: "AccountOverview Slice",
  initialState,
  reducers: {
    setAccountOverviewProps(
      state,
      action: PayloadAction<IAccountOverviewStateForData>,
    ) {
      return { ...state, ...action.payload };
    },
    resetAccountSecurityProps(state) {
      return {
        ...state,
        securities: {
          oldPassword: "",
          newPassword: "",
          confirmPassword: "",
        },
        errorMsg: {
          oldPassword: "",
          newPassword: "",
          confirmPassword: "",
        },
        loading: false,
        activeStep: 0,
      };
    },
    clearAccountOverviewProps() {
      return initialState;
    },
  },
});

export const {
  setAccountOverviewProps,
  clearAccountOverviewProps,
  resetAccountSecurityProps,
} = slice.actions;

export default slice.reducer;
