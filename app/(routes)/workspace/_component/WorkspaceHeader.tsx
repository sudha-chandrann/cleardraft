import { Button } from '@/components/ui/button'
import { Link, Save } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function WorkspaceHeader({onSave}:any) {
  return (
    <div className='bg-black text-white py-2 px-3 border-b flex justify-between items-center z-4'>
        <div className=' flex gap-2 items-center p-3'>
        <Image src={`/logo-1.png`}
       alt='logo'
       height={50}
       width={50}/>
       <h2 className='italic'>File Name</h2>
    </div>
    <div className='flex items-center gap-4'>
        <Button className='bg-yellow-600 hover:bg-yellow-700'  onClick={()=>onSave()}>
            <Save className='w-4 h-4'/> Save
        </Button>
        <Button className='bg-sky-600 hover:bg-sky-700'>
          Share  <Link className='w-4 h-4'/> 
        </Button>
    </div>
      
    </div>
  )
}

export default WorkspaceHeader
