import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import styles from './MainContext.module.css'
import Layout  from '../pages/Layout'
import UserList from '../pages/users/user-list'
import NewUser from '../pages/users/new-user'
import EditUser from '../pages/users/edit-user'
import ProductList from '../pages/products/product-list'
import NewProduct from '../pages/products/new-product'
import EditProduct from '../pages/products/edit-product'



const MainContext = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<UserList/>} />
          <Route path="new-user" element={<NewUser />} />
          <Route path="edit-user" element={<EditUser />} />
          <Route path="user-list" element={<UserList />} />

          <Route path="new-product" element={<NewProduct />} />
          <Route path="edit-product" element={<EditProduct />} />
          <Route path="product-list" element={<ProductList />} />
        </Route>
      </Routes>
      
      </>
    
  )
}

export default MainContext
