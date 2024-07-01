
import GoBackHome from '@/components/GoBackHome'
import SubscribersTable from '@/components/SubscribersTable'

export default function page() {

  const endpoint ='plus-500'

  return (
    <section className='w-[80%] m-auto'>
      <h1 className='text-5xl text-white-500 mb-5'>
        Liste des mauvais abonnés (ayant plus de 10 retards)
      </h1>

      <GoBackHome />

      <SubscribersTable endpoint={endpoint} />
    </section>
  )
}
