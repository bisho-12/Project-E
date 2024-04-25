import axios from 'axios';
import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import shape from "./products.module.css";
import Helmet from "helmet";

async function getAllproducts(id) {
    return await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
}

export default function Products() { 
    const param = useParams();
    const { isLoading, isError, data } = useQuery("productDetails", () => getAllproducts(param.id));
    const ProductDetails = data?.data.data;

    async function GetProducts(id) {
        return await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
    }

    const params = useParams();
    const { isLoading: isLoading2, isError: isError2, data: data2 } = useQuery("ProductDetails", () => GetProducts(params.id));
    const ProductDetails2 = data2?.data.data;
    console.log(data2?.data.data);

    return (
        <>
        {data?.data.data ? (
         <div className='container-fluied mt-3 shape'>
  <div className="container">
      <div className="row bg-black">
   <div className="col-md-4 d-flex m-auto">
  <img src={ProductDetails.imageCover} className='w-100' alt="" />
   </div>
   <div className="col-md-8  m-auto bg-danger">
       <div className='bg-info'>
<h1 className=''> {ProductDetails.title} </h1>
<p className=''>{ProductDetails.slug}</p> 
<p>{ProductDetails.category.name}</p>
<p>{ProductDetails.price} EGP</p>
              </div>
          </div>
      </div>
  </div>
                </div>
            ) : (
                <div className='w-100 bg-info'>
                <h1 className='d-inline '>wait the data please</h1>
                </div>
            )}
        </>
    );
}
