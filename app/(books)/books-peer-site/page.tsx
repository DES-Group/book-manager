import React from 'react'
import TextInput from '@/components/TextInput'
import GoBackHome from '@/components/GoBackHome'
import BookTable from '@/components/BookTable'


export default function page() {

  const endpoint = 'books-peer-site'

  return (
    <section className='w-[80%] m-auto'>
      <h1 className='text-5xl text-white-500 mb-5'>
        {`Liste des abonnés d'un site`}
      </h1>

      <div className='flex justify-center items-center'>
        <TextInput />
        <GoBackHome />
      </div>

      <BookTable endpoint={endpoint} />
    </section>
  )
}
