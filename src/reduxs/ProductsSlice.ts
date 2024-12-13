import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProductState, IProductStateForData } from "@/types/products";

const initialState: IProductState = {
  loading: false,
  categoriesList: [],
};

const slice = createSlice({
  name: "Product Slice",
  initialState,
  reducers: {
    setProductProps(state, action: PayloadAction<IProductStateForData>) {
      return { ...state, ...action.payload };
    },

    clearProductProps() {
      return initialState;
    },
  },
});

export const { setProductProps, clearProductProps } = slice.actions;

export default slice.reducer;
