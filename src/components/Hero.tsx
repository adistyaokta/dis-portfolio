import React from 'react'

export const Hero = () => {
  return (
    <div className='h-full w-full flex-col'>
        <div className='container w-full h-1/3 flex flex-col justify-center'>
            <div className='font-bold uppercase text-6xl font-raleway tracking-wider text-right'>adistya</div>
            <div className='font-semibold uppercase text-5xl font-raleway tracking-wider text-left'>Oktaviano</div>
        </div>
        <div className='container w-full h-1/3 flex flex-col justify-center'>
            <div className='font-semibold uppercase text-4xl font-raleway tracking-wider text-left'>frontend</div>
            <div className='font-semibold uppercase text-4xl font-raleway tracking-wider text-right'>web developer</div>
            <div className='font-normal text-secondary/60'>
            <div>
                Based in Indonesia
            </div>
            </div>
        </div>
    </div>
  )
}
