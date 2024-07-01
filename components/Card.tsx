import Button from './Button'

/**
 * This component show the list of all subscriber or the list of subscriber of a site
 * @param site 
 * @returns 
 */
export default function Card({title, href}:{title:string, href:string}) {

    //Fetch the list of subscriber 

    return (
        <div className='flex flex-col justify-between items-center h-min-[200px] 
            text-center border-2 p-5 border-r-8 hover:border-red-500  hover:rounded-2xl'>
            <h2 className='text-3xl'>{title}</h2>
            <Button href={href} />
        </div>
    )
}
