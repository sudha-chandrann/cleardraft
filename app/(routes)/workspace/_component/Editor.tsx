'use client'
import React, { useEffect, useRef, useState } from 'react'
import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import List from '@editorjs/list';
// @ts-ignore
import Paragraph from '@editorjs/paragraph';
// @ts-ignore

import Warning from '@editorjs/warning';


const rawDocument={
  "time" : 1550476186479,
  "blocks" : [{
      data:{
          text:'Document Name',
          level:2
      },
      id:"123",
      type:'header'
  },
  {
      data:{
          level:4
      },
      id:"1234",
      type:'header'
  }],
  "version" : "2.8.1"
}


function Editor() {

   const ref=useRef<EditorJS>();
   const [document,setdocument]=useState(rawDocument)
  useEffect(()=>{
    initEditor()
  })
  const initEditor=()=>{
    const editor = new EditorJS({
       tools:{
        header: {
          // @ts-ignore
          class: Header,
          shortcut: 'CMD+SHIFT+H',
        },
        list:{
          // @ts-ignore
          class:List,
          inlineToolbar:true,
          config:{
            defaultStyle:'unordered'
          }
        },
        warning: {
          class: Warning,
          inlineToolbar: true,
          shortcut: 'CMD+SHIFT+W',
          config: {
            titlePlaceholder: 'Title',
            messagePlaceholder: 'Message',
          },
        },
        paragraph: Paragraph,



        
       },
      
      holder: 'editorjs',
      data:document

    });
    ref.current=editor
  }
  return (
    <div className=' h-full'>
     <div id='editorjs' className='ml-20 '></div>
    </div>
  )
 
}

export default Editor
