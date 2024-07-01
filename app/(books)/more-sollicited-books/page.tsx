import BookTable from '@/components/BookTable'
import GoBackHome from '@/components/GoBackHome'


export default function page() {
  
  const endpoint = 'more-sollicited-books'
  
  return (
    <section className='w-[80%] m-auto'>
      <h1 className='text-5xl text-white-500 mb-5'>
        La liste des livres les plus sollicités
      </h1>

      <GoBackHome />

      <BookTable endpoint={endpoint} />
    </section>
  )
}

