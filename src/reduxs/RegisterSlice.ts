import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IRegisterState, IRegisterStateForData } from "@/types/register";

const initialState: IRegisterState = {
  value: {
    email: "",
    phoneNumber: "",
    password: "",
    fullName: "",
    confirmPassword: "",
    checkbox: false,
  },
  errorMsg: {
    email: "",
    phoneNumber: "",
    password: "",
    fullName: "",
    confirmPassword: "",
    checkbox: false,
  },
  loading: false,
  isResend: false,
  isVerifyEmail: false,
  emailWaitVerify: "",
};

const slice = createSlice({
  name: "Register Slice",
  initialState,
  reducers: {
    setRegisterProps(state, action: PayloadAction<IRegisterStateForData>) {
      return { ...state, ...action.payload };
    },

    clearRegisterProps() {
      return initialState;
    },
  },
});

export const { setRegisterProps, clearRegisterProps } = slice.actions;

export default slice.reducer;
