'use client'

import Boton from "./components/ui/Boton"
import { useRouter } from "next/navigation"

export default function NotFound (){
    const router = useRouter()
    return(
        <>
            <main> 
                <h1 className="text-xxxl text-red-600 text-center">Error 404</h1>
                <h1 className="text-xxl mt-3 text-black"> Pagina no encontrada  </h1>

                <Boton onClick={() => router.back()}>
                    Volver
                </Boton>


            </main>
        </>
    )

}
