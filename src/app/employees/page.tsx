"use client";

import {useState,useEffect} from 'react';
import {useSelector} from 'react-redux';

import Link from 'next/link'

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
      
      <div className="headline">
        Number of Available Employees: {employeesDatas.length}
      </div>

      <h1>Current Employees</h1>

      <div className="datas-container">

        <DataTable drillingDatas={employeesDatas} /> 

        {!datasAvailable ? (<p className="p-4 text-red-800 font-semibold text-center text-xl">'Mock datas Only'</p>): (<p className="p-4 text-white font-semibold text-center text-xl">'FormDatas Employees'</p>) }

      </div>
      

      

    </section> 

    <Link href="/" className="btn">Home</Link>
    </>

    )
  }

export default EmployeesList