"use client";

import {useState,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {nanoid} from '@reduxjs/toolkit';

import { employeesSlice } from '@/redux/employees/employesSlice';


const FormCreateEmployees = () => {

  const quickStore = useSelector((state) => state.user);


  const dispatch = useDispatch();



  function saveEmployee(event) {
    

    event.preventDefault();

    const formDatas = new FormData(event.target);

    let copyDatas = Object.fromEntries(formDatas)

    const employeeData = {...copyDatas,id:nanoid()}


    //Update Store
    dispatch(employeesSlice.actions.setEmployees([...quickStore.employees,employeeData]));

  
    //Check Update
    // console.log(quickStore)

  }

  return(
    <>
    <form action="/" id="create-employee" onSubmit={()=>{saveEmployee(event)}}>

          <label htmlFor="firstName" className="input-label">First Name</label>
          <input type="text" id="firstName" name="firstName"/>

          <label htmlFor="lastName" className="input-label">Last Name</label>
          <input type="text" id="lastName" name="lastName"/>

          <label htmlFor="dateBirth" className="input-label">Date of Birth</label>
          <input id="dateBirth" name="dateBirth" type="date"/>

          <label htmlFor="start-date" className="input-label">Start Date</label>
          <input id="startDate" name="startDate" type="date"/>


          <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street" className="input-label">Street</label>
                    <input id="street" name="street" type="text" />

                    <label htmlFor="city" className="input-label">City</label>
                    <input id="city" name="city" type="text" />

                    <label htmlFor="state" className="input-label">State</label>
                    <select name="state" name="state" id="state"></select>

                    <label htmlFor="zipCode" className="input-label">Zip Code</label>
                    <input id="zipCode" name="zipCode	" type="number" />
            </fieldset>

          <label htmlFor="department" className="input-label">Department</label>
          <select name="department" id="department" name="department">
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Legal</option>
          </select>


          <button className="btn" type="submit">Save</button>       
        </form>

        

      </>
  )
}
export default FormCreateEmployees