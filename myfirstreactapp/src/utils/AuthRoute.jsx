import React from 'react'
import { Navigate } from 'react-router-dom'

const AuthRoute = () => {
    const user = true
    return yser ? <Navigate to = '/admin' /> : <Outlet />
}

export default AuthRoute