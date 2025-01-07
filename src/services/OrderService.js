import axios from "axios"

const API_URL = "http://localhost:3000/orders"

const createOrder=async(cart)=>{
    const token = localStorage.getItem("token")
    const res = await axios.post(API_URL+ "create",cart,{
        productIds:cart,
    },{
        headers:{
            Authorization:token
        }
    })
    return res
}

const OrderService={
    createOrder
}

export default OrderService