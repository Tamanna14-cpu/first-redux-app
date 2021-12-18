import { configureStore } from '@reduxjs/toolkit'
import bookReducer from './slices/blogSlice';
export const store = configureStore({
    reducer: {
        books: bookReducer,
    },
})