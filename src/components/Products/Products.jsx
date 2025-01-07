import React, { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext/ProductState'
import { useEffect } from 'react'
import {ShoppingCartOutlined} from "@ant-design/icons"
import "./Products.scss";
import { Button, Card } from "antd";



const Products = () => {
    const {products, getProducts,addCart} = useContext(ProductContext)

    useEffect(()=>{
        getProducts()
    },[])
  return (
    <div className='container-products'>
        {products.map((product) => {
            return (
              <Card
              cover={
                <img
                  alt="example"
                  src="src/assets/images/Leonardo_Phoenix_09_Capture_a_photograph_featuring_six_distinc_3.jpg"
                />
              }
                title={product.name}
                bordered={false}
                style={{
                  width: 300,
                }}
                key={product.id || product.name + product.price}
              >
                <p>{product.price} €</p>
                <Button color="default" variant="filled" onClick={()=>addCart(product)}><ShoppingCartOutlined /> Add Cart </Button>
              </Card>
            );
          })}
        </div>
  )
}

export default Products