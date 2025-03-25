'use client';

import Link from "next/link";


import FormCreateEmployees from '@/components/Forms/FormCreateEmployees';


export default function Home() {

  return (

    <>
      <section className="container home">

        <h2 className="p-2 m-2 text-3xl text-center text-black-900">Create Employee</h2>

        <FormCreateEmployees />

      </section>

      <Link href="/employees" className="btn employees-vue font-semibold hover:bg-blue-900 hover:text-white">Check Employees List</Link> 

    </>

  );
}

