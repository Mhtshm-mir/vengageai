import { configureStore } from '@reduxjs/toolkit'
import contactReducer from "../features/Contacts/contactSlice"
export const store = configureStore({
  reducer: {
    contacts:contactReducer
  },
})