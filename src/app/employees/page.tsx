"use client";

import {useState,useEffect} from 'react';
import {useSelector} from 'react-redux';

import Link from 'next/link'

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
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

    <section id="employee-div" className="container employees">
      
      <h1 className="p-2 m-2 text-3xl text-center text-black-900 ">List of Current Employees</h1>

      <div className="p-2 m-2 datas-container">

        <DataTable drillingDatas={employeesDatas} /> 

        <div className="datas-source my-2">
          Source of datas :
            {!datasAvailable ? (<>
            <p className="text-orange-900 font-semibold text-medium">'Mock Datas'</p>
          </>) : (<>
            <p className="text-green-900 font-semibold text-medium">'FormDatas Employees'</p>
        </>)}
        </div>
            
      </div>
      
    </section> 

    <Link href="/" className="btn">Home</Link>

    </>

    )
  }

export default EmployeesList