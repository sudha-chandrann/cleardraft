"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import logo from "../../../../public/logo-1.png"

function page() {
  const [teamname,setteamname]=useState("")
  return (
    <div className='h-screen bg-black '>
      <div className='flex gap-2 pt-10 px-4 items-center'> 
          <Image
           src={logo}
           alt="logo"
            width={80}
           height={30}/>
          <span className='text-sky-600 text-xl italic'>ClearDraft</span>
      </div>
      <div className='flex flex-col items-center mt-20'>
        <h1 className='text-white font-extrabold text-4xl'>What should we call your team ?</h1>
        <h3 className='text-white/40 mt-4'>You can always change this later form setttings.</h3>
        <form className='flex flex-col  mt-10'>
         <label htmlFor="team" className='text-white text-sm italic relative top-4'>TeamName :</label>
          <input id='team' type="text" className="bg-transparent border border-white rounded-lg text-white text-2 lg p-2 w-96 mt-4" placeholder="Enter your team name" value={teamname} onChange={(e)=>{setteamname(e.target.value)}}/>
          <button type='submit' className='bg-sky-600 text-white rounded-lg p-2 mt-10
          hover:bg-sky-700'>Save</button>
        </form>
      </div>
 
     </div>
  )
}

export default page
