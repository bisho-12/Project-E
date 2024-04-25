import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";




export default function Layout(){
    return <>
    <Navbar></Navbar>
    <div className="w-100 m-auto">
    <Outlet></Outlet>
    </div>
    </>
}