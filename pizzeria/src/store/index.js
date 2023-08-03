import { configureStore } from "@reduxjs/toolkit";
import pizzaSlice from "./pizzaSlice";

const store = configureStore({
    reducer: pizzaSlice,
});

export default store;