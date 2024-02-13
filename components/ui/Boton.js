import React from 'react'

const Boton = ({children, className='',...args}) => {
  return (
    <div className={`h-15 rounded-xl bg-zinc-700 text-slate-100 py-2 px-3 text-center text-xl ${className}`} {...args}>
        {children}
    </div>
  )
}

export default Boton

