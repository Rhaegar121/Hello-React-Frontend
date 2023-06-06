import { configureStore } from '@reduxjs/toolkit';
import messagesSlice from './messagesSlice';

const store = configureStore({
  reducer: {
    messages: messagesSlice,
  },
});

export default store;
