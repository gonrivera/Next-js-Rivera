import ProductCard from '@/components/products/ProductCard'
import { mockData } from '@/data/products'
import React from 'react'


const Productos = ({params}) => {
  const {categoria}= params
  const items = categoria ==='all'
                ? mockData
                : mockData.filter(item=> item.type === categoria)
  
  
  return (
      <section>
        {
          items.map(item=> <ProductCard key={item.id} item={item}/>)
        }
      </section>
  )
}

export default Productos