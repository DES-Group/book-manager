'use client'

import { SubscriberType } from '@/app/validations'
import React, { useEffect, useState } from 'react'
import { subscribersData } from '@/app/data/subscriber'
import { useSiteContext } from '@/app/context'



export default function SubscribersTable({ endpoint }: { endpoint: string }) {
    
    const {site} = useSiteContext()
    const [subscribers, setSubscribers] = useState<SubscriberType[]>([])

    useEffect(() => {

        //Simulation code 
        if (endpoint === 'abonnee-non-locaux') 
        {
            const subscribersList = subscribersData.filter((subscriber:SubscriberType) =>
                subscriber.numEtudiant === null)
            setSubscribers(subscribersList)
        }
        else if (endpoint === 'subscribers-peer-site') 
        {
            const subscribersList = subscribersData.filter((subscriber: SubscriberType) =>
                subscriber.site === site)
            setSubscribers(subscribersList)
        }
        else if (endpoint === 'all-subscribers')
        {
            setSubscribers(subscribersData)   
        }
        else if (endpoint === 'borrow-more') 
        {
            setSubscribers(subscribersData)    
        }
        else if (endpoint === 'plus-500') 
        {
            setSubscribers(subscribersData)
        }
        
        // Production code 
        //const subscribers = fetchSubscribers(endpoint, site)
    
    }, [site, subscribers, endpoint])


    return (
        <>
            <p className='flex-1 text-end text-2xl'>{ subscribers.length} abonnés</p>
            <div className="overflow-x-auto bg-black">

                <table className="min-w-full divide-y divide-gray-700">
                    <thead className="bg-gray-800">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 
              uppercase tracking-wider">ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 
              uppercase tracking-wider">Numéro étudiant</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 
              uppercase tracking-wider">Site</th>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-900 divide-y divide-gray-700">
                        {subscribers.length !== 0 ?
                            subscribers.map(({ idAbonne, numEtudiant, site }) => (
                                <tr key={idAbonne} className="hover:bg-gray-700">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">{idAbonne}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{numEtudiant ? numEtudiant : 'Indéfini'}</td>
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
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 
              uppercase tracking-wider">ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 
              uppercase tracking-wider">Numéro étudiant</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 
              uppercase tracking-wider">Site</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </>
      
  )
}
