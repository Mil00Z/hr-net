"use client";

import {useState} from 'react'; 
import {useSelector,useDispatch} from 'react-redux';
import {nanoid} from '@reduxjs/toolkit';

import { RootState } from '@/redux/store';
import { employeesSlice } from '@/redux/employees/employesSlice';


import Modal from '../Modal/Modal';

//Datas
import states from '@/datas/states.json';
import departments from '@/datas/departments.json';


const FormCreateEmployees = () => {

  const quickStore = useSelector((state:RootState) => state.user);

  const dispatch = useDispatch();

  const [triggerError,setTriggerError] = useState<boolean>(undefined);

  const [formIsOk,setFormIsOk] = useState<boolean>(false);

  const [incomingDataForm,setIncomingDataForm] = useState<object>('');


  const statesAvailables = states.map((state) =>{
    return( <option key={`state-${state.id}`} value={state.abbreviation}>{state.name}</option>)

  });

  const departmentsAvailables = departments.map((department) =>{

    return (<option key={`departement-${department.id}`} value={department.name}>{department.name}</option>)
  })


  function closeModal() {

    setFormIsOk(false);
    setTriggerError(undefined);

  } 


  function saveEmployee(event) {
    
    event.preventDefault();

    const formDatas = new FormData(event.target);

    console.log(formDatas);

    //Micro testing One value of input is bad
    if(!formDatas.get('zipCode')) {

      setTriggerError(true);

    } else {

      const copyDatas = Object.fromEntries(formDatas);
  
      const employeeData = {...copyDatas,id:nanoid()}

      //Update Store
      dispatch(employeesSlice.actions.setEmployees([...quickStore.employees,employeeData]));

      setFormIsOk(true);
      setTriggerError(false);

      setIncomingDataForm(employeeData);

      event.target.reset();

    }

  }

   

  return(
    <>
    <form action="/" id="create-employee" onSubmit={()=>{saveEmployee(event)}} className="flex flex-col p-4">

          <label htmlFor="firstName" className="input-label">First Name</label>
          <input type="text" id="firstName" name="firstName" minLength={2} required/>

          <label htmlFor="lastName" className="input-label">Last Name</label>
          <input type="text" id="lastName" name="lastName" minLength={2} required/>

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
            {/* <input id="zipCode" name="zipCode	" type="number" min={00000} max={99999}/> */}
            <input id="zipCode" name="zipCode" type="text" minLength="5" maxLength="5" pattern="[0-9]*" required/>

            </fieldset>

          <label htmlFor="department" className="input-label">Department</label>
          <select id="department" name="department" required>
                    {departmentsAvailables}
          </select>


          <button className="bg-orange-600 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded mt-8" type="submit">Save</button>

          {triggerError !== undefined && (
  triggerError ? (
    <p className="text-white font-bold py-2 px-4 border-b-4 bg-red-500 rounded mt-8" type="submit">
      Unavailable Datas
    </p>
  ) : (
    <p className="text-white font-bold py-2 px-4 border-b-4 bg-green-500 rounded mt-8">
      List Updated !
    </p>
  )
)}
        </form>

        {formIsOk ? (<Modal success={formIsOk} closeModal={closeModal} newUser={incomingDataForm} />):(null)}
        
      </>

  )
}
export default FormCreateEmployees