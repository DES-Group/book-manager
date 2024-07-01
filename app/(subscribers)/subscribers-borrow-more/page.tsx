import GoBackHome from '@/components/GoBackHome'
import SubscribersTable from '@/components/SubscribersTable'



export default function page() {

  const endpoint = 'borrow-more'

  return (
    <section className='w-[80%] m-auto'>
      <h1 className='text-5xl text-white-500 mb-5'>
        Liste des abonnés qui emprunte plus de 500 livres
      </h1>

      <GoBackHome />

      <SubscribersTable endpoint={endpoint} />
    </section>
  )
}
