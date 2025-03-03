"use client";

import {useState,useEffect} from 'react';
import {useSelector} from 'react-redux';

import Link from 'next/link'

import mock from '@/datas/mockTest';

import DataTable from '@/components/DataTable/Datatable';

// import '@/styles/pages/NotFound.scss'

const EmployeesList = () => {

  const employeesDatas = useSelector((state) => state.user.employees)

  const [datasAvailable,setdatasAvailable] = useState(null);


  useEffect(() => { 

    if(employeesDatas.length > 0){

      setdatasAvailable(true);

    }

  }, [employeesDatas]);


  return (
    <>
    <section id="employee-div" className="container">
      
      <h1 className="text-lg text-center text-gray-600">List of Current Employees</h1>

      <div className="datas-container">

        <DataTable drillingDatas={employeesDatas} /> 

          {!datasAvailable ? (<>
          <p className="p-4 text-red-600 font-semibold text-center text-lg">'Mock datas Only'</p>
          <div className="headline">Number of Available Datas: {mock.length}</div>
        </>) : (<>
          <p className="p-4 text-green-600 font-semibold text-center text-lg">'FormDatas Employees'</p>
          <div className="headline">Number of Available Datas: {employeesDatas.length}</div>
      </>)}

      </div>
      
    </section> 

    <Link href="/" className="btn">Home</Link>
    </>

    )
  }

export default EmployeesList