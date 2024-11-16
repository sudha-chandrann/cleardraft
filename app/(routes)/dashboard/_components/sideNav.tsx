"use client"
import React, { useEffect, useState } from 'react'
import SideNavBottomSection from './SideNavBottomSection'
import SideNavTopSection, { TEAM } from './SideNavTopSection'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { useConvex, useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { toast } from 'sonner'
import { Result } from 'postcss'

function SideNav() {
  const {user}:any=useKindeBrowserClient();
  const createFile=useMutation(api.files.createFile)
  const convex=useConvex();
  const [totalFiles,setTotalFiles]=useState(0);
  const [activeTeam,setActiveTeam]=useState<TEAM|any>();




  const onFileCreate=(fileName:string)=>{
    createFile({
      fileName:fileName,
      teamId:activeTeam?._id,
      createdBy:user?.email,
      archive:false,
      document:'',
      whiteboard:''
    })
    .then(resp=>{
      if(resp)
      {
        getFiles();
        toast('File created successfully!')
        setTotalFiles((prev) => prev + 1);
      }
    },
    (e)=>{
      toast('Error while creating file')

    })
  }



const getFiles = async () => {
  if (!activeTeam || !activeTeam._id) {
    console.error('activeTeam or activeTeam._id is undefined');
    return;
  }
  try {
    const files = await convex.query(api.files.getFiles, { teamId: activeTeam._id });
    console.log(files);
    setTotalFiles(files.length);
  } catch (error) {
    console.error('Error fetching files:', error);
  }
};

useEffect(()=>{
  getFiles()
},[activeTeam])


  return (
    <div className=' text-white h-screen fixed w-72 border-r-2 border-sky-800  py-6 flex flex-col justify-between'>
     
      <SideNavTopSection user={user} setActiveTeamInfo={(activeTeam:TEAM)=>{setActiveTeam(activeTeam)}}/>
      <SideNavBottomSection onCreateFile={onFileCreate} totalfiles={totalFiles}/>
    </div>
  )
}

export default SideNav
