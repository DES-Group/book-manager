'use client'

import { books } from '@/app/data/books'
import React, { useEffect, useState } from 'react'
import Table from './SubscribersTable'
import { BookType } from '@/app/validations'
import Link from 'next/link'
import BookTable from './BookTable'



export default function SiteBooks() {

    const [site, setSite] = useState('A')
    const [siteBooks, setSiteBooks] = useState([])
    
    useEffect(() => {
        //const siteBooks = fetchBooksPeerSite(site)
        const siteBooks = books.filter((book) => book.site === site)
        
        setSiteBooks(siteBooks)
    }, [site])
  
  
    return (
        <section className='w-[80%] m-auto'>
            <h1 className='text-5xl text-white-500 mb-5'>
                Liste des livres du site A ({siteBooks.length})
            </h1>

            <div className='flex justify-center items-center'>

                <div className='w-1/2'>
                    <label className='text-2xl'>Choisir un site : </label>
                    <input
                        type="text"
                        name="site"
                        value={site}
                        placeholder='A, B ou C'
                        onChange={(e) => setSite(e.target.value)}
                        className='border-2'
                    />
                </div>

                <Link href="/" className='text-2xl p-5'>{`Retour à l'accueil`}</Link>

            </div>
            

            <BookTable books={siteBooks} />
        </section>
  )
}
