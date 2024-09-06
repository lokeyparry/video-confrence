import { Video } from 'lucide-react'
import React from 'react'

const Logo = () => {
  return (
    <div className='flex items-center gap-1 text-2xl font-bold'>
        <Video size={38} className='bg-primary p-2 rounded-lg' />
        <h1 className='text-gradient'>ParryMeet</h1>
    </div>
  )
}

export default Logo