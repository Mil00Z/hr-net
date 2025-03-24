"use client";

import Link from 'next/link'

// Import global styles
import '@/styles/pages/NotFound.scss'

// Page not found component
const PageNotFound = () => {

  return (
    <>
      <section className="not-found-container">
        <h1 className="title">404</h1>
        <p className="description">Oups! La page que vous demandez n&apos;existe pas.</p>
        <Link href="/" className="link btn btn-cta">Retourner sur la page d&apos;accueil</Link>
      </section>  
    </>
    )
  }

export default PageNotFound