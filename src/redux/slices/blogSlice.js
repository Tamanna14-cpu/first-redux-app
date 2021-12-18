import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// First, create the thunk
export const fetchBooks = createAsyncThunk(
    'blog/fetchBooks',
    async () => {
        const response = await fetch('https://rocky-castle-59670.herokuapp.com/services').then(res => res.json())
        return response
    }
)

const bookSlice = createSlice({
    name: 'blog',
    initialState: {
        discover: [],
        readingList: [],
        finishedList: [],

    },
    reducers: {
        addToReadingList: (state, { payload }) => {
            state.readingList.push(payload)
        },
        removeFormReadingList: (state, { payload }) => {
            state.readingList = state.readingList.filter(blog => blog.id !== payload.id);
        },
        markAsFinished: (state, { payload }) => {
            state.finishedList.push(payload);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBooks.fulfilled, (state, action) => {
            state.discover = action.payload;
        })
    },

});

export const { addToReadingList, removeFormReadingList, markAsFinished } = bookSlice.actions;

export default bookSlice.reducer;