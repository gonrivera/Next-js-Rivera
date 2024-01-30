"use client"

import { useRouter } from "next/navigation"

const GoBack =({...args})=> {
    const router=useRouter()

    return(
        <button onClick={router.back} {...args}>volver</button>
    )
}
export default GoBack