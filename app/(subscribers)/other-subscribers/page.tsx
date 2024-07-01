
import Link from 'next/link'
import SubscribersTable from '@/components/SubscribersTable'
import GoBackHome from '@/components/GoBackHome'

export default function page() {

  const endpoint = 'abonnee-non-locaux' 

  return (
    <section className='w-[80%] m-auto'>
      <h1 className='text-5xl text-white-500 mb-5'>
        Liste des abonnés non locaux
      </h1>

      <GoBackHome />

      <SubscribersTable endpoint={endpoint} />

    </section>
  )
}
