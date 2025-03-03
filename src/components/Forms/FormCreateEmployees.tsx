"use client";

import {useState,useEffect} from 'react'; 
import {useSelector,useDispatch} from 'react-redux';
import {nanoid} from '@reduxjs/toolkit';


import ModalSuccess from '../Modal/ModalSuccess';

//Datas
import states from '@/datas/states.json';
import departments from '@/datas/departments.json';

import { employeesSlice } from '@/redux/employees/employesSlice';


const FormCreateEmployees = () => {

  const quickStore = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const [triggerError,setTriggerError] = useState(false);

  const [formIsOk,setFormIsOk] = useState(false);


  const statesAvailables = states.map((state) =>{
    return( <option key={`state-${state.id}`} value={state.abbreviation}>{state.name}</option>)

  });

  const departmentsAvailables = departments.map((department) =>{

    return (<option key={`departement-${department.id}`} value={department.name}>{department.name}</option>)
  })


  function closeModal() {

    setFormIsOk(false);

  } 


  function saveEmployee(event) {
    
    event.preventDefault();

    const formDatas = new FormData(event.target);

    //Micro testing One value of input is bad
    if(formDatas.get('firstName').length < 4) {

      setTriggerError(true);

    } else {

      const copyDatas = Object.fromEntries(formDatas);
  
      const employeeData = {...copyDatas,id:nanoid()}

      //Update Store
      dispatch(employeesSlice.actions.setEmployees([...quickStore.employees,employeeData]));

      setFormIsOk(true);

    }

  }

   

  return(
    <>
    <form action="/" id="create-employee" onSubmit={()=>{saveEmployee(event)}} className="flex flex-col p-4">

          <label htmlFor="firstName" className="input-label">First Name</label>
          <input type="text" id="firstName" name="firstName" required/>

          <label htmlFor="lastName" className="input-label">Last Name</label>
          <input type="text" id="lastName" name="lastName" required/>

          <label htmlFor="dateBirth" className="input-label">Date of Birth</label>
          <input id="dateBirth" name="dateBirth" type="date" required/>

          <label htmlFor="start-date" className="input-label">Start Date</label>
          <input id="startDate" name="startDate" type="date"/>


          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street" className="input-label">Street</label>
             <input id="street" name="street" type="text" />

            <label htmlFor="city" className="input-label">City</label>
            <input id="city" name="city" type="text" />

            <label htmlFor="state" className="input-label">State</label>
            <select name="state" id="state" required>
                {statesAvailables}
            </select>

            <label htmlFor="zipCode" className="input-label">Zip Code</label>
            <input id="zipCode" name="zipCode	" type="number"/>
                    
            {/* <input id="zipCode" name="zipCode" type="text" maxLength="5" required /> */}

            </fieldset>

          <label htmlFor="department" className="input-label">Department</label>
          <select name="department" id="department" name="department" required>
                    {departmentsAvailables}
          </select>

          {triggerError ? (<p className="text-white font-bold py-2 px-4 border-b-4 bg-red-500 rounded mt-8" type="submit">Unavailable Datas</p>):(<button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-8" type="submit">Save</button>)}
               
        </form>

        {formIsOk ? (<ModalSuccess success={formIsOk} closeModal={closeModal} />):(null)}
      </>

  )
}
export default FormCreateEmployees