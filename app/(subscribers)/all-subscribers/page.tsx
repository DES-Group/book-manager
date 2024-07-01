import GoBackHome from '@/components/GoBackHome'
import SubscribersTable from '@/components/SubscribersTable'
import React from 'react'

export default function page() {

  const endpoint = 'all-subscribers'


  return (
    <section className='w-[80%] m-auto'>
      <h1 className='text-5xl text-white-500 mb-5'>
        La liste de tous les abonnés
      </h1>

      <GoBackHome />

      <SubscribersTable endpoint={endpoint} />
    </section>
  )
}
