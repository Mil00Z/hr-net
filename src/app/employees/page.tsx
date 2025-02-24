"use client";

import {useSelector} from 'react-redux';

import Link from 'next/link'

import DataTable from '@/components/DataTable/Datatable';



// import '@/styles/pages/NotFound.scss'

const EmployeesList = () => {

  const employeesDatas = useSelector((state) => state.user.employees)


  return (
    <>
    <section id="employee-div" className="container">
      
      <div className="headline">
        Number of Available Employees: {employeesDatas.length}
      </div>

      <h1>Current Employees</h1>

      <DataTable drillingDatas={employeesDatas} /> 

      {employeesDatas.length === 0 ? (<p>'No data available in table'</p>): null }

    </section> 

    <Link href="/" className="btn">Home</Link>
    </>

    )
  }

export default EmployeesList