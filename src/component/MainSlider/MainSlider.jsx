import React from 'react';
import styles from './MainSlider.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cover1 from "../../Assets/images/Slide1.png"
import cover2 from "../../Assets/images/Slide2.avif"
import cover3 from "../../Assets/images/Slide3.avif"
export function MainSlider()
{
  var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1, 
  };
  return <>
<div class="row bg-dark cartt ">
<div className="col-md-12">
<Slider {...settings}>
<img src={cover1} alt=""  height={300} className='w-100'/>
<img src={cover2} alt="" height={300}  className='w-100'/>
<img src={cover3} alt="" height={300}  className='w-100'/>
</Slider>
</div>
</div>
</>
}
