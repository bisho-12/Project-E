import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from "./component/Layout/Layout";
import Register from "./component/Register/Register";
import Category from "./component/Category/Category";
import Notfound from "./component/Notfound/Notfound";
import Place from './component/Place/Place';
import Home from './component/Home/Home';
import Navbar from './component/Navbar/Navbar';
import CounterContextProvider from './component/Context/CounterContext';
import Brands from './component/Brands/Brands';
import Products from './component/Products/Products';
import Login from './component/Login/Login';
import UserContextProvider from './component/Context/UserContext';
import { CartContextProvider } from './component/Context/CartContext';
import toast, { Toaster } from 'react-hot-toast';
import Card from './component/Card/Card';
 import ProtectedRoute from './component/ProtectedRoute/ProtectedRoute';


let routers = createBrowserRouter([
{path :"/" ,element:<Layout/>,children:[
{ path :"Home" ,element:<Home/>} ,
{ path :"Register" ,element: <Register/>} ,
{ path :"Products" ,element:<ProtectedRoute><Products/></ProtectedRoute>},
{ path :"Category", element:  <ProtectedRoute><Category/></ProtectedRoute> },
{ path :"Brands", element:<ProtectedRoute><Brands/></ProtectedRoute>      } ,
{ path:"Place" ,element:<Place/>},
{ path:"Navbar", element:<Navbar/>},
{ path:"Card", element:<ProtectedRoute><Card/></ProtectedRoute>},
{ path:"Login", element:<Login/>},
{ path:"products/:id", element:<Products/>},
{ path:"Card", element:<Card/>},
{ path:"*" ,element:<Notfound/>} ,
]}
])

function App() {
return <CartContextProvider>
<UserContextProvider>
<CounterContextProvider>
<RouterProvider  router={routers} ></RouterProvider>
</CounterContextProvider>
</UserContextProvider>
 </CartContextProvider>
}
export default App;


