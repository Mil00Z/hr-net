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

      <DataTable drillingDatas={employeesDatas} /> 

      {!datasAvailable ? (<p>'No data available in store : Mock datas ON'</p>): (<p>Showing 1 of {employeesDatas.length} entries</p>) }

    </section> 

    <Link href="/" className="btn">Home</Link>
    </>

    )
  }

export default EmployeesList