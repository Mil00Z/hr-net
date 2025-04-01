import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Employee } from '@/types/employees.types';

// export type Employee = {
//   firstName: string;
//   lastName: string;
//   startDate: string;
//   department: string;
//   dateOfBirth: string;
//   street: string;
//   city: string;
//   state: string;
//   zipCode: string;
//   id?: string;
// }


const initialState = {
  employees: [] as Employee[],
};


export const employeesSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setEmployees: (state : typeof initialState, action: PayloadAction<Employee[]>) => {
      return {...state, employees: action.payload};
    },
  },
});