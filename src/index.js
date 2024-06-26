import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClient,QueryClientProvider } from 'react-query';
import UserContextProvider from './component/Context/UserContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
let queryClient = new QueryClient()
root.render(




<QueryClientProvider client={queryClient}>
 <UserContextProvider>
      <App /> 
  </UserContextProvider> 
  </QueryClientProvider>

  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
{/* <React.StrictMode>
  </React.StrictMode> */}