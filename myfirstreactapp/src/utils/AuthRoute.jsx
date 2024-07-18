import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const AuthRoute = () => {
    const {user} = useAuth()
    return user ? <Navigate to = '/' /> : <Outlet />
}

export default AuthRoute