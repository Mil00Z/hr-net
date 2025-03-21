"use client";

import {configureStore,combineReducers} from '@reduxjs/toolkit';

import { employeesSlice } from '@/redux/employees/employesSlice';


export const store = configureStore({
  preloadedState: {},
  reducer: combineReducers({
   user:employeesSlice.reducer
  })
});

export type RootState = ReturnType<typeof store.getState>;