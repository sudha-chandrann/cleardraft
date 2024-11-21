'use client'
import React, { useEffect, useState } from 'react'
import {  MainMenu, WelcomeScreen } from "@excalidraw/excalidraw";
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import dynamic from "next/dynamic";
const Excalidraw = dynamic(
  async () => (await import("@excalidraw/excalidraw")).Excalidraw,
  {
    ssr: false,
  },
);
function Canvas({onSaveTrigger,fileId,filedata}:any) {
  const [whiteBoardData,setWhiteBoardData]=useState<any>();
  const updateWhiteBoard=useMutation(api.files.updateWhiteboard)
  const saveWhiteBoard=()=>{
    updateWhiteBoard({
      fileId:fileId,
      whiteboard:JSON.stringify(whiteBoardData)})
      .then(resp=>{
        console.log(resp);
      })
  }
  useEffect(()=>{
    onSaveTrigger && saveWhiteBoard();
  },[onSaveTrigger])

  return (
    <div className='bg-red-400 h-full'>
     <div style={{ height: "500px" }}>
      {
        filedata && <Excalidraw
        theme='light'
        initialData={{
          elements: filedata?.whiteboard&&JSON.parse(filedata?.whiteboard)
        }}
        onChange={(excalidrawElements, appState, files)=>
          setWhiteBoardData(excalidrawElements)}
          UIOptions={{
            canvasActions:{
              saveToActiveFile:false,
              loadScene:false,
              export:false,
              toggleTheme:false
            }
          }}
        >
            <MainMenu>
              <MainMenu.DefaultItems.ClearCanvas/>
              <MainMenu.DefaultItems.SaveAsImage/>
              <MainMenu.DefaultItems.ChangeCanvasBackground/>
            </MainMenu>
            <WelcomeScreen>
              <WelcomeScreen.Hints.MenuHint/>
              <WelcomeScreen.Hints.MenuHint/>
              <WelcomeScreen.Hints.ToolbarHint/>
              <WelcomeScreen.Center>
                  <WelcomeScreen.Center.MenuItemHelp/>
              </WelcomeScreen.Center>
            </WelcomeScreen>

        </Excalidraw>
      }
      <Excalidraw />
      </div>
    </div>
  )
}

export default Canvas