import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { sendText } from './formAPI';

const initialState = {
  message: null ,
  status: 'idle',
};


export const sendTextAsync = createAsyncThunk(
  'text/sendText',
  async (obj, {rejectWithValue}) => {
    try {
      const response = await sendText(obj);
      return response.data;
    } catch (error) {
      // console.log(error)
      return rejectWithValue(error.response.data)
    }

  }
);

export const textSlice = createSlice({
  name: 'text',
  initialState,
  reducers: {
  
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendTextAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(sendTextAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.message = action.payload.message;
      })
      .addCase(sendTextAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.message = action.payload.message;
      })
      
  },
});

// export const { } = cartSlice.actions;

export default textSlice.reducer;
