import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  // Initial state of the slice
  loading: false,
  error: null,
  products: [],
  product: null,
  pagination: {},
  favouritesToggled: true,
};
export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setProducts: (state, { payload }) => {
      state.loading = false;
      state.products = payload;
      state.error = null;
    },
    setError:(state,{payload})=>{
        state.loading=false;
        state.error=payload;

    },
    setPagination:(state,{payload})=>{
        state.loading = false;
        state.error = null;
        state.pagination=payload;
    }
  },
});

export const {setLoading,setError,setProducts,setPagination} = productsSlice.actions


export default productsSlice.reducer;

export const productSelector =  (state)=> state.products;