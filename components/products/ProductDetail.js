import { mockData } from "@/data/products";
import Image from "next/image";

const ProductDetail = ({slug}) => {
    const item = mockDatafind(p => p.slug ===slug)

    return(
        <div className="max-w-4xl m-auto">

            <section className="flex gap-6">
                <div className="relative basis-1/2">
                    <Image
                        src={`/imgs/products/${item.image}`}
                        alt={item.title}
                        width={860}
                        height={860}
                    />

                </div>

                <div className="basis-1/2">
                    <h2 className="text-xxl font-semibold border-b border-gray-200 pb-4 mb-4">{item.title}</h2>
                    <p className="text-xxxl">${item.price}</p>

                </div>
            </section>

        </div>
    )
}