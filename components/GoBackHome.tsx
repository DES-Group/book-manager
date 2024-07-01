import Link from 'next/link'
import React from 'react'

export default function GoBackHome() {
  return (
    <Link href="/" className='text-2xl p-5'>{`Retour à l'accueil`}</Link>

  )
}
