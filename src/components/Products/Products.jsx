import React, { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext/ProductState'
import { useEffect } from 'react'

const Products = () => {
    const {products, getProducts} = useContext(ProductContext)

    useEffect(()=>{
        getProducts()
    },[])
  return (
    <div>{
        products.map(product=>{
            return <div>
                <p>{product.name}</p>
                </div>
        })
        }</div>
  )
}

export default Products