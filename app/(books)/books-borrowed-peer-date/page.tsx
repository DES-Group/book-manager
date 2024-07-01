import Link from 'next/link'
import React from 'react'

export default function page() {

  const endpoint = 'books-borrowed-peer-date' 

  return (
    <section className='w-[80%] m-auto'>
      <h1 className='text-5xl text-white-500 mb-5'>
        Nombre de livres empruntés à une date donné
      </h1>

      <div className='flex justify-end items-center'>
        
        <Link href="/" className='text-2xl p-5'>{`Retour à l'accueil`}</Link>
      </div>

      <p>Afficher un tableau des livres empruntés par date</p>

      
    </section>
  )
}
