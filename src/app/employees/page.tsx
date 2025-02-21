"use client";

import Link from 'next/link'

// import '@/styles/pages/NotFound.scss'

const EmployeesList = () => {

  return (
    <>
    <div id="employee-div" className="container">

      <h1>Current Employees </h1>

      <table id="employee-table" className="display data-table">
        <p className="table-label">Table of datas of Employees Updates by Form</p>
      </table>

      <Link href="/" className="btn">Home</Link>

    </div> 
    </>

    )
  }

export default EmployeesList