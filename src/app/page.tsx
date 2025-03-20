'use client';

import Link from "next/link";



import FormCreateEmployees from '@/components/Forms/FormCreateEmployees';

export default function Home() {

  return (

    <>

        
      <div className="container home">

        <h2 className="p-2 m-2 text-3xl text-center text-black-900">Create Employee</h2>

        <FormCreateEmployees />

      </div>

      <Link href="/employees" className="btn">Check Employees List</Link> 

    
    </>

  );
}
