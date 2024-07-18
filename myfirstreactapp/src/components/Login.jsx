 
import './Login.css'
import { useAuth } from '../context/AuthContext'

export const Login = () => {

  const {user,login} = useAuth()
  console.log(user);

  return (
    <div className='text-center p-20 text-4xl'>
        <button onClick={login}>Continue to Login</button>
    </div>
  )
}
