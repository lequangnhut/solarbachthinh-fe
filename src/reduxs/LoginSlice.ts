import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IErrorLoginState, IErrorLoginStateForData } from '@/types/login';

const initialState: IErrorLoginState = {
  value: {
    email: '',
    password: '',
  },
  errorMsg: {
    email: '',
    password: '',
  },
  loading: false,
};

const slice = createSlice({
  name: 'Login Slice',
  initialState,
  reducers: {
    setLoginProps(state, action: PayloadAction<IErrorLoginStateForData>) {
      return { ...state, ...action.payload };
    },

    clearLoginProps() {
      return initialState;
    },
  },
});

export const { setLoginProps, clearLoginProps } = slice.actions;

export default slice.reducer;
