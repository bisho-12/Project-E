import { Link , useNavigate} from "react-router-dom";
import logo from"../../Assets/images/385250930_3810091745986951_7329447226328613456_n.jpg"
import { useContext } from "react";
import {CounterContext} from "../Context/CounterContext";
import { UserContext } from "../Context/UserContext";

export default function Navbar(){
let navigate = useNavigate()
let {userToken,setuserToken} = useContext(UserContext)
let {counter}= useContext(CounterContext)

function Logout(){
localStorage.removeItem("userToken")
setuserToken(null)
navigate("/Login")
  }
return <>
<nav className="navbar bg-main navbar-expand-lg ">
<div className="container-fluid bg-light">
<Link className="navbar-brand " to="/"> <img src={logo} alt="fresh"  width={60} /> </Link >
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
<ul className="navbar-nav bg-white  mb-2 mb-lg-0">
{userToken !== null? <>
<li className="nav-item">
          <Link  className="nav-link active " aria-current="page" to="/Home">Home</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link active " aria-current="page" to="/Products">Proudts <span>{counter}</span>
        </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Category">Category</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Brands">Brands</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Card">Cart</Link>
        </li>
</>: <>
<h1>FAV MARKET</h1>
</>
}
</ul>
<ul className="navbar-nav ms-auto mb-2 mb-lg-0"> 
<li className="mt-2 d-flex me-3  align-items-center">
<i className="fab fa-facebook mx-2 h5"></i>
<i className="fab fa-twitter  mx-2 h5"></i>
<i className="fab fa-youtube  mx-2 h5"></i>
<i className="fab fa-instagram mx-2 h5"></i>
  </li>
{userToken !== null? <>
  <li className="nav-item">
   <Link  onClick={()=>Logout()} className="nav-link"  to="/Register">Logout</Link>
    </li> 
</>:<>
<li className="nav-item">
  <Link className="nav-link" to="/Login">Login</Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link" to="/Register">Register</Link>
  </li> 
</> 
}
       </ul>
    </div>
  </div>
</nav>
</>  

}
