"use client";

import Link from 'next/link'

// import '@/styles/pages/NotFound.scss'

const EmployeesList = () => {

  return (
    <>
    <div id="employee-div" className="container">

      <h1>Current Employees </h1>

      <table id="employee-table" className="display"></table>

      <Link href="/" className="button">Home</Link>

    </div> 
    </>

    )
  }

export default EmployeesList