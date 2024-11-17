"use client"

import React, { useState } from 'react'
import WorkspaceHeader from '../_component/WorkspaceHeader'
import Editor from '../_component/Editor';
import Canvas from '../_component/Canvas';

function Workspace({params}:any) {
    const [triggerSave,setTriggerSave]=useState(false);
 
  return (
    <div className='relative'>
        <div className='sticky top-0 z-3 bg-black'>     
             <WorkspaceHeader onSave={()=>{setTriggerSave(!triggerSave)}}/>
        </div>
      <div className='grid grid-cols-1 md:grid-cols-2 relative z-1'>
        <div className='h-screen'>
           <Editor onSaveTrigger={triggerSave} fileId={params.fileId}/>
        </div>
        <div className='h-screen border-1'>
            <Canvas/>
        </div>

      </div>

    </div>
  )
}

export default Workspace
