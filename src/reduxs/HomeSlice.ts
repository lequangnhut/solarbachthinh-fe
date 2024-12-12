import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IHomeState, IHomeStateForData } from "@/types/home";

const initialState: IHomeState = {
  isActiveSlide: 0,
  toggleOpenHeader: false,
};

const slice = createSlice({
  name: "Home Slice",
  initialState,
  reducers: {
    setHomeProps(state, action: PayloadAction<IHomeStateForData>) {
      return { ...state, ...action.payload };
    },

    clearHomeProps() {
      return initialState;
    },
  },
});

export const { setHomeProps, clearHomeProps } = slice.actions;

export default slice.reducer;
