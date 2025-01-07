import React, { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext/ProductState'
import {Button} from 'antd'
import { DeleteOutlined  } from "@ant-design/icons";
import { Empty } from 'antd';
import OrderService from '../../services/OrderService';

const Cart = () => {
    const {cart, clearCart}= useContext(ProductContext)
    if(cart.length < 1){
        return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="The cart is empty" />
    }
  return (
    <div>{cart.map(product =>{
        return <div key={product.id || product.name + product.price}>
            <p>Product name: {product.name} Price: {product.price}€</p>
        </div>
 } )}
 <Button onClick={clearCart}>Clear Cart<DeleteOutlined /></Button>
 <Button onClick={async()=>{
    await OrderService.createOrder(cart)
    clearCart()}}>Create Order</Button>
 </div>
 )
}

export default Cart