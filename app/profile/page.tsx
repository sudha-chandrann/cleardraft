'use client'
import { Link } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

function page() {
    const [editprofile,seteditprofile]=useState(true);
    const [isUser,setisUser]=useState(false)
    return (
        <div className='bg-black h-full text-white'>

       <div className='bg-[#9A43B1] h-20 sti top-0 z-10'>
       </div>
       <div className='min-h-screen flex flex-col sm:flex-row w-full px-10'>
            <div className=' h-full w-full md:w-[40%] lg:w-[30%] pt-16 flex flex-col items-center'>

                <div className='h-60 w-60 rounded-full bg-transparent flex items-center justify-center'>
                     <Image src="/profile_image.png" className="h-60 w-60" alt='profileImage' width={100} height={100}/>
                </div>
                <h1 className='mt-6 text-2xl'>Sudha Chandran</h1>
                {
                   isUser&& !editprofile &&  <div className='w-4/5 bg-[#9A43B1] py-2 flex items-center justify-center mt-4   rounded-lg hover:bg-purple-600' onClick={()=>{seteditprofile(true)}}>Edit Profile</div>
                }
                   {
                   isUser &&  editprofile &&
                    <div className='w-full border border-white rounded-lg px-2 mt-4 py-4 '>
                        <div className='mx-4 flex items-center justify-between'>
                            <label htmlFor='name'>Name:</label>
                            <input id='name' type="text" className=' p-2 py-1 border border-white rounded-lg  bg-black/50 w-4/5 ml-5' placeholder='Name'/>
                        </div>
                        <div className='mx-4 mt-2 flex items-center justify-between'>
                            <label htmlFor='bio'>Bio:</label>
                            <textarea id='bio'  className=' p-2  border border-white rounded-lg  bg-black/50 w-4/5 ml-5' placeholder='Add a bio'/>
                        </div>
                        <div className='mx-4 flex items-center justify-between mt-2'>
                            <label htmlFor='Pronouns'>Pronouns
                            :</label>
                            <input id='Pronouns' type="text" className=' p-2 py-1 border border-white rounded-lg  bg-black/50 w-4/5 ml-5' placeholder='Pronouns'/>
                        </div>
                        <h3 className='mt-2 ml-4'>Social Accounts</h3>
                        <div className='mx-4 mt-4 flex items-center justify-between'>
                            <label htmlFor='LinkedIn' className='flex gap-2'><Link/><span>LinkedIn</span></label>
                            <input id='LinkedIn' type="text" className=' p-2 py-1 border border-white rounded-lg  bg-black/50 w-4/5 ml-5' placeholder='LinkedIn link'/>
                        </div>
                        <div className='mx-4 mt-4 flex items-center justify-between'>
                            <label htmlFor='Github' className='flex gap-2'><Link/><span>Github</span></label>
                            <input id='Github' type="text" className=' p-2 py-1 border border-white rounded-lg  bg-black/50 w-4/5 ml-5' placeholder='Github link'/>
                        </div>


                        <div className='mx-4 mt-5 flex items-center justify-start gap-6'>
                            <button className='bg-[#9A43B1] py-2 px-3 rounded-md hover:bg-purple-700' >Save</button>
                            <button className='bg-white text-black py-2 px-3 rounded-md' onClick={()=>{seteditprofile(false)}}>Cancal</button>
                        </div>
                    </div>
                   }  

                    
                        { !isUser &&
                        <div className='w-full flex items-center justify-center flex-col'>
                              <h1 className=' text-sm'>Sudha123 -  she/her</h1>
                              <div className='w-4/5'></div>
                              <div className='w-4/5 bg-[#9A43B1] py-2 flex items-center justify-center mt-4   rounded-lg hover:bg-purple-600'>Follow</div>
                        </div>
                    }
                    
             
            </div>    


        </div>
     

         </div>
    )
}
   


export default page
