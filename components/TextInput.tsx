'use client'


import { useSiteContext } from '@/app/context'
import { SubscriberType } from '@/app/validations'

export default function TextInput() {
  
    const { site, setSite } = useSiteContext()
    
    return (
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
  )
}
