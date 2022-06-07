import React from 'react'
import  ReactDOM  from 'react-dom/client'
import { Store } from './ShoppingApp/Redux2/products/store'
import { App } from './App'

import './PostApp/index.css'
import { Provider } from 'react-redux'
const root = ReactDOM.createRoot(document.getElementById('root'))

 const Index = () => 
 {
     return(
         <React.StrictMode >
         <Provider store={Store}>

         <App/>
         </Provider>
        </React.StrictMode>
       
     )

    }

root.render(<Index />);

