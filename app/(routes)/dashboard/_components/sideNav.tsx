
import React from 'react'
import SideNavBottomSection from './SideNavBottomSection'
import SideNavTopSection from './SideNavTopSection'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'

function SideNav() {
  const {user}:any=useKindeBrowserClient();
  return (
    <div className=' text-white h-screen fixed w-72 border-r-2 border-sky-800  py-6 flex flex-col justify-between'>
     
      <SideNavTopSection user={user}/>
      <SideNavBottomSection/>
    </div>
  )
}

export default SideNav
