import { createContext } from "react";
import { Navigate } from "react-router-dom";
export let UserContext = createContext()


export default function ProtectedRoute(props)
{

if( localStorage.getItem("userToken") !== null){

    console.log("one");
    return props.children
}

else{
    return <Navigate to={"/login"}/>
}

}






