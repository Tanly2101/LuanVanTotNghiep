import React from "react";
import { Route, Routes, useLocation } from 'react-router-dom';
import SanPHam from "./Component/SanPHam";
import Home from "./Component/Home";
import Checkout from "./Component/Checkout"
import Header from './Component/Header';
import Login from './Component/Login'
import {ChiTietSanPham} from './Component'
// import { ArrowLongDownIcon } from "@heroicons/react/24/outline";
import Registration from "./Component/Registration";
import { path } from "./ultis/constant";
import { System , CreatePost, ManagePost,EditAccount } from "./containers/System";


export function App(){
  const location = useLocation();
 
  return(
   
    <>
    {location.pathname !== '/Checkout' && <Header/>}
      <Routes>
      
        <Route>
        <Route path='/' element={<Home/>} />
        <Route path='/SanPham' element={<SanPHam/>} />
        <Route path='/Checkout' element={<Checkout/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/registration' element={<Registration/>} />
        <Route path='/chi-tiet-san-pham' element={<ChiTietSanPham/>} />

        </Route>
        <Route path={path.SYSTEM} element={<System/>}>
            <Route path={path.CREATE_POST} element={<CreatePost />} />
            <Route path={path.MANAGE_POST} element={<ManagePost />} />
            <Route path={path.EDIT_ACCOUNT} element={<EditAccount />} />

        </Route>
      </Routes>

    </>
  );
}

export default App;