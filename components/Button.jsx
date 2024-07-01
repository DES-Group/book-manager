import Link from 'next/link'
import React from 'react'

export default function Button({ href }) {

  return (
    <div className='text-white border-2 border-r-8 p-3 mt-5 hover:rounded-2xl'>
      <Link href={href}>Voir la liste</Link>
    </div>
  )
}
