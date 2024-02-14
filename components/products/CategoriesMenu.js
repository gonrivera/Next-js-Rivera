'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
    {label: "Todos", href: "/productos/todos",},
    {label: "Iphone", href: "/productos/iphone",},
    {label: "Mac", href: "/productos/mac",},
    {label: "Ipad", href: "/productos/ipad",},
]

const CategoriesMenu = () =>{
    const pathname = usePathname()

    return(
        <aside>
            {links.map(link =>(
                <Link 
                    key={link.label}
                    href={link.href}
                    className={`${pathname === link.href ? "font-semibold border-b" : ''} py-2`}
                >
                   {link.label} 
                </Link>
            ))}

        </aside>
    )
}

export default CategoriesMenu