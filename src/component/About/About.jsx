import { Component } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import  { CounterContext } from "../CounterContex/CounterContext";
 

export default class About extends Component {


    state ={


 }
render (){
    return <>
    <div className="container bg-black d-flex justify-content-center align-align-items-center">
<div className="container  bg-danger">
    <ul>
        <li><Link to="">web</Link></li>
        <li><Link to="mobil">mobil</Link></li>
    </ul>

</div>
    </div>

    <div className="container">
        <Outlet></Outlet>
    </div>
    </>
}

}

