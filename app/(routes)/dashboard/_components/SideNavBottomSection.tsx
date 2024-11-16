import { Button } from '@/components/ui/button';
import { Archive, Flag, Github } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

function SideNavBottomSection() {
    const menuList=[
        {
          id:1,
          name:'Getting Started',
          icon:Flag,
          path:'teams/create'
        },
        {
          id:2,
          name:'Github',
          icon:Github,
          path:''
        },
        {
          id:3,
          name:'Archive',
          icon:Archive,
          path:''
        }
      ]

      const router=useRouter();
  return (
    <div className='bg-white/30 w-full rounded-md  py-3 px-2'> 
     {
        menuList.map((item,index)=>(
          
            <h2 className='flex   items-center text-md gap-2 hover:bg-white/40 rounded-md px-2 py-1' onClick={()=>{ router.push(item.path)}}>   <item.icon className='w-4 h-4'/>{ item.name}</h2>

        ))
     }



     <Button className='w-full bg-sky-500 hover:bg-sky-700 flex justify-start'> New File</Button>
     

     <div className='h-4 w-full rounded-full mt-5 bg-white'>
        <div className='h-full rounded-full w-[20%] bg-red-600'></div>
     </div>
     <h2 className='py-1 px-2 text-[15px]'><strong>1</strong> out of <strong>5</strong> files used</h2>
     <h2 className='text-sm px-2'>Upgrade your plan for unlimited access</h2>


    </div>
  )
}

export default SideNavBottomSection
