import React from 'react'
import portfolios from "../Data/port"


function Portfolio() {

  

  return (
    <div name="portfolio" className='bg-gradient-to-b h-full from-black to-gray-800 w-ful text-white md:h-fit'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='mt-10'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>

        

        {/* card structure */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
        {
          portfolios.map(({id,src,demo,code}) => (

            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
            <div className='flex items-center justify-center'>
              <a href={demo} target="_blank" rel="noreferrer" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>demo</a>
              <a href={code} target="_blank" rel="noreferrer" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</a>
            </div>
          </div>

          ))
        }
          
        </div>
      </div>
    </div>
  )
}

export default Portfolio