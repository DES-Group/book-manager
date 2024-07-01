'use client'


export const fetchSubscribers = async (endpoint:string, site:string | null) => {
    
    let final_endpoint ='' 

    if (!site) 
    {
        final_endpoint = `${endpoint}?site=${site}` 
    }
    else 
    {
        final_endpoint = endpoint 
    }

    try {
        const response = await fetch(final_endpoint)

        if (!response.ok)
        {
            throw new Error(`HTTPS Error: ${response.status}`)    
        }

        const data = await response.json()
        return data

    } catch (error) {
        throw error
    }
}
