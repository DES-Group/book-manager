'use client'

import { useSiteContext } from '@/app/context';
import { booksData } from '@/app/data/books';
import { BookType } from '@/app/validations';
import { useEffect, useState } from 'react';



const BookTable = ({ endpoint }: { endpoint: string }) => {

    const { site } = useSiteContext()
    const [books, setBooks] = useState<BookType[]>([])

    useEffect(() => {

        //Simulation code 
        if (endpoint === 'books-peer-site') {
            const booksList = booksData.filter((book: BookType) =>
                book.site === site)
            setBooks(booksList)
        }
        else if (endpoint === 'more-sollicited-books') {
            setBooks(booksData)

        }
        else if (endpoint === 'coming-late-books') {
            setBooks(booksData)
        }
        else if (endpoint === 'losed-books') {
            setBooks(booksData)
        }
        else if (endpoint === 'books-borrowed-peer-date') {
            setBooks(booksData)
        }


        // Production code 
        //const books = fetchBooks(endpoint, site)

    }, [site, books, endpoint])

    return (
        <div className="overflow-x-auto bg-black">
            <table className="min-w-full divide-y divide-gray-700">
                <thead className="bg-gray-800">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Nom</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Site</th>
                    </tr>
                </thead>
                <tbody className="bg-gray-900 divide-y divide-gray-700">
                    {books.length !== 0 ?
                        books.map(({ idLivre, nom, site }) => (
                            <tr key={idLivre} className="hover:bg-gray-700">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">{idLivre}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{nom}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{site}</td>
                            </tr>
                        )) :
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300" colSpan={3}>Le tableau est vide.</td>
                        </tr>
                    }
                </tbody>
                <tfoot className="bg-gray-800">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Nom</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Site</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default BookTable;
