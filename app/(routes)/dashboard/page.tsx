"use client"
import React, { useEffect } from 'react'
import {LogoutLink, useKindeBrowserClient} from "@kinde-oss/kinde-auth-nextjs";
import { Button } from '@/components/ui/button';
import { useConvex, useMutation, useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';

function page() {

    const convex=useConvex();
    const {user}:any = useKindeBrowserClient();
    const creatUser=useMutation(api.user.createUser)
   useEffect(()=>{
    if(user){
        checkUser()
    }
   },[user])

  const checkUser=async()=>{
    const result=await convex.query(api.user.getUser,{email:user?.email});
    console.log("the user is ",result.user)
    if(!result.success){
            await creatUser({
             email:user.email,
             name:user.given_name+" "+user.family_name,
             image:user.picture}).then(resp=>{
             console.log("the response is ",resp)
         })
    }
   
  }


  return (
    <div>
        <Button> <LogoutLink>logout</LogoutLink></Button>
      dashboard
    </div>
  )
}

export default page