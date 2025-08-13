import { configureStore } from "@reduxjs/toolkit";
import { logger } from "redux-logger";
import counterReducer from "./count.store";

const reducer = {
  counter: counterReducer,
};

export const makeStore = () => {
  return configureStore({
    reducer,
    middleware: (GetDefaultMiddleware) => GetDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== "production",
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
