import React from 'react';
import PropTypes from 'prop-types';
import styles from './CategorySlider.module.css';
import { useQuery } from "react-query";
import axios from 'axios';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export function CategorySlider()
{
  var settings={
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 1, 
  };

 async function getCategory()
{
return await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
}
let {data,isLoading,isError} = useQuery("CategorySlider",getCategory)
return <>
<div className="bg-danger mt-5">
{data?.data.data? <Slider {...settings}>
{data?.data.data.map((Category)=> <img  height={200}  key={Category.id} src={Category.image} className='w-100'/>)}  
</Slider>:" "}
</div>
</>
}
