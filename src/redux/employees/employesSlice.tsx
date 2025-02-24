import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  employees: [],
};

export const employeesSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setEmployees: (state, action) => {
      return{...state,employees:action.payload}
    },
  },
});