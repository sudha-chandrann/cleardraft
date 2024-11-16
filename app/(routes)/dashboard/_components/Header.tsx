'use client'
import { Button } from '@/components/ui/button'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { Search, Send } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

function Header() {
   const [searchinput,setsearchinput]=useState<string>()
   const {user}:any=useKindeBrowserClient();
  return (
    <div className='bg-black text-white w-full  py-2 px-3  flex gap-2 justify-end'>
      <div className='flex bg-white/50 py-1 rounded-lg gap-1 items-center px-2'>
        <Search className='w-5 h-5'/>
        <input type='text' className='rounded-lg py-1 px-2 bg-transparent focus:outline-none' placeholder='Search' value={searchinput} onChange={(e)=>{setsearchinput(e.target.value)}}/>
      </div>
      <div>
        <Image src={user?.picture} alt='user' height={40} width={40} className='rounded-full'/>
      </div>
      <Button className='bg-sky-700 hover:bg-sky-800 text-sm'><Send/>Invite</Button>
    </div>
  )
}

export default Header
