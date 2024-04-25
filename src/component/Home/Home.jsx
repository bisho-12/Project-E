import React, {useEffect, useState,useContext} from 'react';
import CounterContextProvider, { CounterContext } from '../Context/CounterContext';
import Featuerd from '../Featuerd/Featuerd';
import { CategorySlider } from '../CategorySlider/CategorySlider';
import { MainSlider } from '../MainSlider/MainSlider';
import toast, { Toaster } from 'react-hot-toast';


export default function Home(){
  return <>
<MainSlider></MainSlider>
<CategorySlider></CategorySlider>
<Featuerd></Featuerd>
<Toaster></Toaster>
  </>
}



