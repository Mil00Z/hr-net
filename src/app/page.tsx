'use client';

import {useContext} from 'react';
import { DataContext } from './contextProvider';

import Image from "next/image";
import Link from "next/link";


import FormCreateEmployees from '@/components/Forms/FormCreateEmployees';

export default function Home() {

  const contexte = useContext(DataContext);

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

          <h2>Create Employee</h2>

          <FormCreateEmployees />

        </div>

        <Link href="/employees" className="btn">View Current Employees</Link> 

    </>

  );
}
