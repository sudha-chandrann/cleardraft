"use client"
import React, { useEffect, useState } from 'react'
import WorkspaceHeader from '../_component/WorkspaceHeader'
import Editor from '../_component/Editor';
import { useConvex } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { FILE } from '../../dashboard/_components/FileList';
import { useParams } from 'next/navigation';
import Canvas from '../_component/Canvas';

function Workspace() {
  const params = useParams();
  const { fileId }:any = params;
    const [triggerSave,setTriggerSave]=useState(false);
    const [fileData,setfiledata]=useState<FILE|any>();
    const convex=useConvex();

     useEffect(()=>{
      fileId && getFileData()
     },[])

     const getFileData=async()=>{
      const fileData=await convex.query(api.files.getFilebyid,{fileId:fileId});
      console.log("the filedata is ",fileData)
      setfiledata(fileData)
     }
  return (
    <div className='relative'>
        <div className='sticky top-0 z-3 bg-black'>     
             <WorkspaceHeader onSave={()=>{setTriggerSave(!triggerSave)}}/>
        </div>
      <div className='grid grid-cols-1 md:grid-cols-2 relative z-1'>
        <div className='h-screen'>
           <Editor onSaveTrigger={triggerSave} fileId={fileId} fileData={fileData}/>
        </div>
        <div className='h-screen border-1'>
            <Canvas filedata={fileData} onSaveTrigger={triggerSave} fileId={fileId}/>
        </div>

      </div>

    </div>
  )
}

export default Workspace
