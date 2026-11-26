// @ts-nocheck

import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getEventWebAsync } from '../services/eventService';

const initialState = {
  isLoading: false,
  alert: {
    type: '',
    message: '',
  },
  eventList: [],

};

const eventSlice = createSlice({
  name: 'inventoryUnit',
  initialState,
  reducers: {
    clearAlert(state) {
      state.alert = {
        type: '',
        message: '',
      };
    },
  },
  extraReducers: (builder) => {
    // Get Country ----------
    builder.addMatcher(isAnyOf(getEventWebAsync.pending), (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addMatcher(isAnyOf(getEventWebAsync.fulfilled), (state, { payload }) => {
      state.isLoading = false;
    state.eventList = payload?.data;
    });
    builder.addMatcher(isAnyOf(getEventWebAsync.rejected), (state, { payload }) => {
      state.isLoading = false;
      state.alert = {
        type: 'error',
        message: 'Something went wrong.',
      };
      state.event = [];
    });
    //


  },
});

export default eventSlice.reducer;
