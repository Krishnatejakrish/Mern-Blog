import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  // Initial state of the slice
  loading: false,
  error: null,
  products: [],
  product: null,
  pagination: {},
  favoritesToggled: true,
  favorites: JSON.parse(localStorage.getItem('favorites'))??[] // we use double question mark like either that or this 
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
    },
    setFavorites :(state,{payload})=>{
      state.favorites= payload
    },
    setFavoritesToggle : (state,{payload})=>{
      state.favoritesToggled=payload
    }
  },
});

export const {setLoading,setError,setProducts,setPagination,setFavorites,setFavoritesToggle} = productsSlice.actions


export default productsSlice.reducer;

export const productSelector =  (state)=> state.products;