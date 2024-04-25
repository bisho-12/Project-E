import { Component, createContext, useContext } from "react";
import axios from "axios"

export let CartContext = createContext()

export function CartContextProvider(props){
   let headers={
    token:localStorage.getItem("userToken")
    }
//  
   async function AddToCart(id) 
  {
  return await axios.post(`https://route-ecommerce.onrender.com/api/v1/cart`,{productId:id},
  {headers}
  )
  .then((response)=>response)
   .catch((error)=>error);
    }


async function getLoggedUserCart(){
 return await axios.get(`https://route-ecommerce.com/api/v1/cart`,{headers})
.then((response)=>response)
.catch((error=>error))
}


return <CartContext.Provider value={{AddToCart,getLoggedUserCart}}>
{props.children}
</CartContext.Provider>
}






/*---------------------------------/*
async function RemoveItem(productId){
return await axios.delete(`https://route-ecommerce.onrender.com/api/v1/cart/${productId}`,{headers})
.then((resopnse)=>resopnse)
.catch((error)=>error)
}RemoveItem
/*---------------------------------/*

/*------------------------------------------------- */
// async function update(Id,Count)
// { 
// return await  axios.put(`https://route-ecommerce.com/api/v1/cart/${Id}`,
// {Count},{headers})
// .then((response)=>response)
// .catch((error)=>error)
// }
/*------------------------------------------------- */




