"use client";

import {useState,useEffect} from 'react';


const FormCreateEmployees = () => {


  function saveEmployee(event){

    event.preventDefault;

    console.log('click submit')

  }

  return(
    <>
    <form action="/" id="create-employee">

          <label htmlFor="first-name" className="input-label">First Name</label>
          <input type="text" id="first-name"/>

          <label htmlFor="last-name" className="input-label">Last Name</label>
          <input type="text" id="last-name"/>

          <label htmlfor="date-of-birth" className="input-label">Date of Birth</label>
          <input id="date-of-birth" type="date"/>

          <label htmlFor="start-date" className="input-label">Start Date</label>
          <input id="start-date" type="date"/>


          <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street" className="input-label">Street</label>
                    <input id="street" type="text" />

                    <label htmlFor="city" className="input-label">City</label>
                    <input id="city" type="text" />

                    <label htmlFor="state" className="input-label">State</label>
                    <select name="state" id="state"></select>

                    <label htmlFor="zip-code" className="input-label">Zip Code</label>
                    <input id="zip-code" type="number" />
            </fieldset>

          <label htmlFor="department" className="input-label">Department</label>
          <select name="department" id="department">
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Legal</option>
          </select>
                
        </form>

        <button className="btn" onClick={()=>{saveEmployee(event)}}>Save</button>

      </>
  )
}
export default FormCreateEmployees