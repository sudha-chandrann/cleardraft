"use client"
import { api } from '@/convex/_generated/api';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { useConvex } from 'convex/react';
import { useRouter } from 'next/navigation';
import React, {  useEffect } from 'react'

function layout(
    {
        children,
      }: Readonly<{
        children: React.ReactNode;
      }>
) {

  const convex=useConvex();
  const {user}:any=useKindeBrowserClient();
  const router=useRouter();
  useEffect(()=>{
    if(user){
        checkteam()
    }
  })


  const checkteam=async()=>{
   
        const result=await convex.query(api.teams.getTeam,{email:user?.email})
        if(!result?.length){
           router.push('teams/create')
        }
    
  }

  return (
    <div>
      {children}
    </div>
  )
}

export default layout
