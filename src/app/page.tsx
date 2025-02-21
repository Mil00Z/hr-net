'use client';

import {useState,useContext} from 'react';
import { DataContext } from './contextProvider';

import Image from "next/image";
import Link from "next/link";


import FormCreateEmployees from '@/components/Forms/FormCreateEmployees';

export default function Home() {

  const [test,setTest] = useState('');

  const contexte = useContext(DataContext);

  return (

    <>


    <p> {contexte} </p>
    
      <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
      />

        <div className="title">
            <h1>HRnet</h1>
        </div>


        <div className="container">

          <h2>Create Employee</h2>

          <FormCreateEmployees />

        </div>



      
        {/* Message Modal if Form Submit is OK */}
        <div id="confirmation" className="modal debeug">
          Employee Created ! 
        </div>

        <Link href="/employees" className="btn">View Current Employees</Link> 

    </>

  );
}
