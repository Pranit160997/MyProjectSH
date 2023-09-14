import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "./redux/apis/contactsApi";

export const store = configureStore({
    reducer: {
        [contactsApi.reducerPath] : contactsApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(contactsApi.middleware)
})