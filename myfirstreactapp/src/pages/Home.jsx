import React from 'react'
import ToDoList from '../components/ToDoList'
import { useSelector } from 'react-redux'

const Home = () => {

  const {count} = useSelector(state=>state.counter)
  return (
    <div>
       <p>The count is: {count} </p>  
      <ToDoList />
   
      </div>
  )
}

export default Home