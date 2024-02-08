import { configureStore } from "@reduxjs/toolkit";

import counterincdec from './counterSlice'
import { goodsslice } from "./goodsslice";
export const Store =configureStore({
    reducer:{
        counterincdec,
        goodsslice
        
    },
})
