'use client';

import Image from "next/image";
import Link from "next/link";


import FormCreateEmployees from '@/components/Forms/FormCreateEmployees';

export default function Home() {

  return (

    <>
        <div className="title">
            <Link href="/">
                <Image
                    className="dark:invert"
                    src="/next.svg"
                    alt="Next.js logo"
                    width={180}
                    height={38}
                    priority
                />
                <h1>HRnet</h1>
            </Link>
        </div>


        <div className="container">

          <h2 className="p-2 m-2 text-xl text-center text-gray-600">Create Employee</h2>

          <FormCreateEmployees />

        </div>

        <Link href="/employees" className="btn">View Current Employees</Link> 

    </>

  );
}
