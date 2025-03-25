"use client";

import Link from 'next/link'


import '@/styles/pages/NotFound.scss'


const PageNotFound = () => {

  const descriptionNotFound = `Oups! La page que vous demandez n'existe pas 😐`;
  const labelButtonNotFound = `Retourner sur la page d'accueil`;

  return (
    <>
      <section className="not-found-container">
        <h1 className="title">404</h1>
        <p className="description">{descriptionNotFound}</p>
        <Link href="/" className="link btn btn-cta">{labelButtonNotFound}</Link>
      </section>  
    </>
  )
}
export default PageNotFound