import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
 
const AdminRoute = () => {

    const isAdmin = false
    return user ? <Outlet /> : <Navigate to = '/login' />

}


export default AdminRoute