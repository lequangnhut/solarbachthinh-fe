import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  IForgotPasswordState,
  IForgotPasswordStateForData,
} from "@/types/forgotPassword";

const initialState: IForgotPasswordState = {
  value: {
    verificationEmailCode: "",
    newPassword: "",
    confirmPassword: "",
    email: "",
  },
  errorMsg: {
    verificationEmailCode: "",
    newPassword: "",
    confirmPassword: "",
    email: "",
  },
  loading: false,
};

const slice = createSlice({
  name: "ForgotPassword Slice",
  initialState,
  reducers: {
    setForgotPasswordProps(
      state,
      action: PayloadAction<IForgotPasswordStateForData>,
    ) {
      return { ...state, ...action.payload };
    },

    clearForgotPasswordProps() {
      return initialState;
    },
  },
});

export const { setForgotPasswordProps, clearForgotPasswordProps } =
  slice.actions;

export default slice.reducer;
