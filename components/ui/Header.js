'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const links = [
    {
        label: "Inicio",
        href: "/"
    },
    {
        label: "Productos",
        href: "/productos"
    },
    {
        label: "Nosotros",
        href: "/nosotros"
    },
    {
        label: "Contacto",
        href: "/contacto"
    }
]


const Header = () => {

  const phatname = usePathname()
    
  return (
    <header className='w-full bg-zinc-600'>
        <div className='container m-auto py-6 flex justify-between items-center'>
            <Link href={"/"}>
            <Image
                src={"/logoappleb.svg"}
                alt="Logo Apple"
                width={70}
                height={20}           
            />       
            </Link>
            <nav className=' flex justify-between gap-2'>
              {
                links.map(link =>{
                    return <Link
                    key={link.label}
                    href={link.href}
                    className={`${phatname === link.href ? 'font-bold ' : ''}text-xl text-slate-100 p-10`}
                    
                    >
                        {link.label}
                    </Link>
                })
              }  
                
            </nav>
        </div>     
    </header>
  )
} 

export default Header