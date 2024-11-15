import React from 'react'

function Hero() {
  return (
  <section className="bg-black">
    <div className='flex-col h-screen pt-20 '>
    <div className='text-white  text-center flex justify-center items-baseline  pt-10' >
      <h1 className='border border-white rounded-full px-3 py-1 '>See What's New | <span className='text-sky-300'>AI Diagram</span> </h1>
      </div>
  <div className="mx-auto max-w-screen-xl px-4 py-8 lg:flex   ">
    <div className="mx-auto max-w-2xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl text-sky-400">
        Documents & diagrams
        <strong className="font-extrabold text-white sm:block"> for Engineering teams </strong>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed text-slate-200">
        All-in-one markdown editor , collaborative canvas, and diagram-as-code builder
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-black shadow hover:bg-slate-400 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
          href="#"
        >
          Learn More
        </a>


      </div>
    </div>
  </div>
    </div>
 
</section>
  )
}

export default Hero
