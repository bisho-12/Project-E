import { React, useContext, useEffect, useState } from "react";
import axios from "axios"
import color from "./Featuerd.moduel.css"
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import toast from 'react-hot-toast';

  export default  function Featuerd()
{ 
let {AddToCart}=useContext(CartContext)
async function addProuduct(prouductId)
{
let response = await AddToCart(prouductId)
if(response.data.status==="success")
{
    // toast('Successfully created!');
    toast('Add successufluy', {
        duration: 2000,
        position: 'top-center',
      
        // Styling
        style: {  
            backgroundColor:"red"
        },
        className: 'bg-white',
      
        // Custom Icon
        // icon: '👏',
      
        // Change colors of success/error/loading icon
        iconTheme: {
        //   primary: "red",
          secondary: 'white',
        },
      
        // Aria
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      });

}
else {
    toast('This is an error!');
}

}



 async function getFeatuerdProduct()
    {
     return axios.get('https://ecommerce.routemisr.com/api/v1/products')
    }
let {data,isLoading}=useQuery("featureProducts",getFeatuerdProduct)

// console.log(data?.data.data);
// let counter=1
// const[products,setProducts]= useState([])
// async function getAllProduct() {
// let {data}= await axios.get("https://ecommerce.routemisr.com/api/v1/products")
// setProducts(data.data); 
// }
// useEffect (()=>{

//     getAllProduct()
// },[])


return <>
{
isLoading?<>
<div className="h-100 w-100 bg-danger text-center" >
<h1>WAIT THE DATA</h1>
    </div>
    </>:<div className="row p-2 mt-5">
    <div className="w-100  cartona d-flex justify-content-end">
<h1 className=" "> شوف ال يعجبك</h1>
</div>
{data?.data.data.map((product) => (
<div className="col-md-2 mt-3  Items " key={product.id}>
    <Link to={`/products/${product.id}`}>
    <div className="inner p-2" >
<img src={product.imageCover} className="w-100" alt={product.title} />
<h3 className="text-success h6">{product.category.name}</h3>
<h3 className ="h6">
 {product.title.split(" ",2).join(" ")}
</h3>
<div className="d-flex justify-content-between ">
    <div className="col-6">
<small>{product.price+8} EGP</small>
    </div>
    <small className="col-6 text-end p-1">
<i className="fa-solid fa-star rating__color"></i>
{product.ratingsAverage} 
    </small>
    </div>
    </div>
    </Link>
<button className="bg-success border text-white p-2 rounded-3 w-100 " onClick={()=>addProuduct(product.id)}>Add to Cart</button>
</div>
))}
   </div>

}
</>




   
}