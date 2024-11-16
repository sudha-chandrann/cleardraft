'use client'
import { Button } from '@/components/ui/button';
import { Archive, Flag, Github } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { DialogClose } from '@radix-ui/react-dialog';
  
function SideNavBottomSection({onCreateFile,totalfiles}:any) {
    const [filename,setfilename]=useState('');
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
          
            <h2 key={index} className='flex   items-center text-md gap-2 hover:bg-white/40 rounded-md px-2 py-1' onClick={()=>{ router.push(item.path)}}>   <item.icon className='w-4 h-4'/>{ item.name}</h2>

        ))
     }

<Dialog>
  <DialogTrigger className='w-full' >   <Button className='w-full bg-sky-500 hover:bg-sky-700 flex justify-start'> New File</Button></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Create New File</DialogTitle>
      <DialogDescription>
        <input placeholder='Enter file Name' value={filename} onChange={(e)=>{setfilename(e.target.value)}} className='w-full border border-black/50 rounded-md px-2 py-1 mt-3 text-black'/>
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
          <DialogClose asChild>
            <Button type="button" className='bg-sky-600 hover:bg-sky-700' disabled={filename.length<4}
            onClick={()=>{onCreateFile(filename)
                setfilename('')
            }}>
              create
            </Button>
          </DialogClose>
        </DialogFooter>
  </DialogContent>
</Dialog>


  
     

     <div className='h-4 w-full rounded-full mt-5 bg-white'>
        <div className={`h-full rounded-full  bg-red-600`}
        style={{ width: `${(totalfiles/5)*100}%` }}></div>
     </div>
     <h2 className='py-1 px-2 text-[15px]'><strong>{totalfiles}</strong> out of <strong>5</strong> files used</h2>
     <h2 className='text-sm px-2'>Upgrade your plan for unlimited access</h2>


    </div>
  )
}

export default SideNavBottomSection
