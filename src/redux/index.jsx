import { configureStore } from "@reduxjs/toolkit";
import productSlice  from "./reducers/sliceProduct";
import basketSlice  from "./reducers/sliceBasket";
import favoriteSlice  from "./reducers/sliceFavorite";
import  searchSlice  from "./reducers/sliceSearch";

export const store = configureStore({
    reducer: {
        data: productSlice,
        basket: basketSlice,
        favorite: favoriteSlice,
        search: searchSlice
    }
})