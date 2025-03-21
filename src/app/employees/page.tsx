"use client";

import {useState,useEffect} from 'react';
import {useSelector} from 'react-redux';

import Link from 'next/link'

import mock from '@/datas/mockTest';

import DataTable from '@/components/DataTable/Datatable';


const EmployeesList = () => {

  const employeesDatas = useSelector((state) => state.user.employees);

  const datasStoreAvailable = employeesDatas.length > 0 ;

  const incomingDatas = datasStoreAvailable ? employeesDatas : mock;


  return (
  <>

    <section id="employee-div" className="container employees">
      
      <h1 className="p-2 m-2 text-3xl text-center text-black-900 ">List of Current Employees</h1>

      <div className="p-2 m-2 datas-container">

        <DataTable initialDatas={incomingDatas} /> 

        <div className="datas-source my-2">
        Source of datas : 
          {!datasStoreAvailable ? (<>
              <p className="text-orange-900 font-semibold text-medium">'Mock Datas'</p>
            </>) : (<>
              <p className="text-green-900 font-semibold text-medium">'FormDatas Employees'</p>
          </>)
          }
        </div>
            
      </div>
      
    </section> 

    <Link href="/" className="btn">Home</Link>

  </>

  )
}

export default EmployeesList