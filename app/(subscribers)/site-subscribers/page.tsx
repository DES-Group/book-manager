import GoBackHome from '@/components/GoBackHome'
import SubscribersTable from '@/components/SubscribersTable'
import TextInput from '@/components/TextInput'
import React from 'react'

export default function page() {
  const endpoint = 'subscribers-peer-site'
  
  return (
    <section className='w-[80%] m-auto'>
      <h1 className='text-5xl text-white-500 mb-5'>
        {`Liste des abonnés d'un site`}
      </h1>

      <div className='flex justify-center items-center'>
        <TextInput />
        <GoBackHome />
      </div>

      <SubscribersTable endpoint={endpoint} />
    </section>
  )
}

