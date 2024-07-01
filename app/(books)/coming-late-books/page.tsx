import React from 'react'
import Link from 'next/link'
import BookTable from '@/components/BookTable'
import GoBackHome from '@/components/GoBackHome'


export default function page() {

  const endpoint = 'coming-late-books'

  return ( 
     <section className='w-[80%] m-auto'>
      <h1 className='text-5xl text-white-500 mb-5'>
        Liste des livres souvent en retard
      </h1>

      <GoBackHome />

      <BookTable endpoint={endpoint} />
    </section>
  )
}
