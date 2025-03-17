"use client";

import {useState,useEffect} from 'react';
import {useSelector} from 'react-redux';

import Link from 'next/link'

import DataTable from '@/components/DataTable/Datatable';


const EmployeesList = () => {

  const employeesDatas = useSelector((state) => state.user.employees)

  const [datasAvailable,setdatasAvailable] = useState<boolean>(null);


  useEffect(() => { 

    if(employeesDatas.length > 0){

      setdatasAvailable(true);

    }

  }, [employeesDatas]);


  return (
    <>
    <section id="employee-div" className="container">
      
      <h1 className="p-2 m-2 text-3xl text-center text-black-900 ">List of Current Employees</h1>

      <div className="p-2 m-2 datas-container">

        <DataTable drillingDatas={employeesDatas} /> 

          {!datasAvailable ? (<>
          <p className="p-4 text-red-600 font-semibold text-center text-lg">'Mock datas Only'</p>
        </>) : (<>
          <p className="p-4 text-green-600 font-semibold text-center text-lg">'FormDatas Employees'</p>
      </>)}

      </div>
      
    </section> 

      <Link href="/" className="btn">Home</Link>

    
    </>

   

    )
  }

export default EmployeesList