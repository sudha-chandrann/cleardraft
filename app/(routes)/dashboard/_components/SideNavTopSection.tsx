"use client"
import React, { useEffect, useState } from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { ChevronDown, icons, LayoutGrid, LogOut, Settings, Users } from 'lucide-react'
import Image from 'next/image'
import logo from "../../../../public/logo-1.png"
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs'
import { useRouter } from 'next/navigation'
import { Separator } from "@/components/ui/separator"
import { useConvex } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { Button } from '@/components/ui/button'

export interface TEAM{
    createdBy:String,
    teamName:String,
    _id:String
}

function SideNavTopSection({user}:any) {


const menu=[
    {
        id:1,
        name:'create Team',
        path:'/teams/create',
        icons:Users
    }
    ,
    {
        id:2,
        name:'settings',
        path:'/teams/create',
        icons:Settings
    }
]
const convex=useConvex();
const [activeTeam,setActiveTeam]=useState<TEAM>();
const [teamList,setTeamList]=useState<TEAM[]>();
const getTeamList=async()=>{
    const result=await convex.query(api.teams.getTeam,{email:user?.email})
    console.log("TeamList",result);
    setTeamList(result);
    setActiveTeam(result[0]);
   
}
useEffect(()=>{
    user&&getTeamList();
},[user])


const router=useRouter();

const onMenuClick=(path:string)=>{
   router.push(path)
}


  return (
   <div className='w-full '>
    <Popover >
        <PopoverTrigger className='w-full '>
        <div className='flex gap-2 items-center hover:bg-white/40 px-3 py-3 rounded-md cursor-pointer '>
      
      <Image
      src={logo}
      alt='logo'
      width={50}
      height={50}/>
      <span className='italic'>Team Name</span>
      <ChevronDown/>
      </div>
        </PopoverTrigger>
        <PopoverContent className='ml-4 p-4'>
            <div>
            {teamList?.map((team,index)=>(
                        <h2 key={index}
                        className={`p-2 hover:bg-blue-500
                         hover:text-white
                         rounded-lg mb-1 cursor-pointer
                         ${activeTeam?._id==team._id&&'bg-sky-500 text-white'}`}
                         onClick={()=>setActiveTeam(team)}
                        >{team.teamName}</h2>
             ))}
                
            </div>
            <Separator className='mt-2 bg-black/40'/>
            <div>
                {
                    menu.map((items:any):any=>(
                        <h2 key={items.id} className='flex gap-2 items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer text-sm' onClick={()=>onMenuClick(items.path)}>
                            <items.icons className='w-4 h-4'/>
                            {items.name}
                        </h2>
                    ))
                }
                <h2  className='flex gap-2 items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer text-sm'>
                            <LogOut className='w-4 h-4'/>
                            <LogoutLink>logout</LogoutLink>
                        </h2>
                
            </div>
            <Separator className='mt-2 bg-black/40'/>
             {
                user && <div className='flex gap-2 items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer text-sm'>
                    <Image
                    src={user?.picture} alt='user' width={30} height={30 } className='rounded-full'/>
                                       <div>
                        <h2 className='text-[14px] font-bold'>{user?.given_name} {user?.family_name}</h2>
                        <h2 className='text-[12px] text-gray-500'>{user?.email}</h2>

                    </div>

                </div>
             }
        </PopoverContent>
    </Popover>
   
   <Button variant='outline' className=' bg-white/30 border-transparent w-full flex justify-start mt-10 hover:bg-white/40'>
    <LayoutGrid/>
    All files</Button>
   </div>
  )
}

export default SideNavTopSection
