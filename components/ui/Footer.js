import React from 'react'
import Image from 'next/image'


const Footer = () => {
  return (
    <footer className='w-full bg-zinc-600 botder-t'>
        <div className='flex item-center justify-between mx-10'>
            <p className='text-xl text-slate-100 p-3'>Desarrollado por Gonzalo Rivera</p>

            <div className='flex item-center gap-2'>
                <p className='text-xl text-slate-100 p-3'>Powered by: </p>
                <Image
                src= {"./next.svg"}
                alt= "logo Next"
                width={60}
                height={60}                
                />
            </div>
        </div>
            
    </footer>
  )
} 

export default Footer