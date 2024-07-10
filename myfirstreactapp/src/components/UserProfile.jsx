import React from 'react'
import UserDetails from './UserDetails'

const UserProfile = ({user}) => {
     console.log("user log" , user);
  return (
    <div className='container'>
        <p>Username : {user.username}</p>
        <p>Age: {user.age} </p>
        <p>Age: {user.id} </p>
        <UserDetails/>
        </div>
  )
}

export default UserProfile