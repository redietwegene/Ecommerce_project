import React from 'react'
import Navbar from './assets/component/Navbar'
import Product from './assets/component/product'
import './App.css'
import Addnew from './assets/component/Addnew'
import Prodcutlist from './assets/component/Productlist'
import Admin from './assets/component/Admin'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Cart from './assets/component/cart'


function App() {
  return (
    <div>
       <Navbar/>
      <Product />
      {/* <Prodcutlist /> */}
  
    <Admin/>
<div>
  
                <Routes>
                  <Route path='/' element={<Admin/>}></Route>
                    <Route path="/addnewproduct" element={<Addnew/>}></Route>
          <Route path="/productlist" element={<Prodcutlist />}></Route>
          <Route path='/cart' element={ <Cart/>} />
                </Routes>
           
</div>
    </div>
   
  
  )
}

export default App
