import { createContext, useContext, useState } from "react";


export const AuthContext = createContext()

export const AuthProvider  = ({children}) => {
    
    const savedUser = localStorage.getItem('user')
    const[user,setUser] = useState(savedUser ? JSON.parse(savedUser): null) 

    const login = () => {
        const userData = {
            username: "Elon",
            password: "12345"
        }

        setUser(userData)
        //saving user data to local storage
        //JSON.stringify -> convert to json format
        localStorage.setItem('user',JSON.stringify(userData))
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem('user')
    }

    return ( 
    
    <AuthContext.Provider value={{user,login,logout}} >
    {children}
    </AuthContext.Provider>
   )
}

export const useAuth = () => useContext(AuthContext)