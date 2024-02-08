import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Isfetching: false,
  Isfetchingsuccessfull: [],
  Isfetchingfailed: null,
  Isposting: false,
  Ispostingsuccessfull: [],
  Ispostingfailed: null,
};

export const goodsslice = createSlice({
  name: "productFetcher",
  initialState,
  reducers: {
    Fetchingstart: (state) => {
      (state.Isfetching = true),
        (state.Isfetchingsuccessfull = []),
        (state.Isfetchingfailed = null);
    },
    Fetchingsuccessfull: (state, actions) => {
      (state.Isfetching = false),
        (state.Isfetchingsuccessfull = actions.payload),
        (state.Isfetchingfailed = null);
    },
    Fetchingfailed: (state, actions) => {
      (state.Isfetching = false),
        (state.Isfetchingsuccessfull = []),
        (state.Isfetchingfailed = actions.payload);
    },
    Postingstart: (state) => {
      (state.Isposting = true),
        (state.Ispostingsuccessfull = []),
        (state.Ispostingfailed = null);
    },
    Postingsuccessfull: (state, actions) => {
      (state.Isposting = false),
        (state.Ispostingsuccessfull = actions.payload),
        (state.Ispostingfailed = null);
    },
    Postingfailed: (state, actions) => {
      (state.Isposting = false),
        (state.Ispostingsuccessfull = []),
        (state.Ispostingfailed = actions.payload);
    },
  },
});

export default goodsslice.reducers;
export const {
  Fetchingproduct,
  Fetchingproductfailed,
  Fetchingproductsuccessfull,
} = goodsslice.actions;
