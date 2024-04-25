import React,{Component} from "react";
import Category from "../Category/Category";
import Brands from "../Brands/Brands";
export default function Parent ()
{
    let name = "bisho";
    return <>
<Category nm={name}>   
<Brands/>
</Category>
    
    </>
}




