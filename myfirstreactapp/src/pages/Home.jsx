import React from 'react'
import ToDoList from '../components/ToDoList'
import { useDispatch, useSelector } from 'react-redux'
import { addByAmount, decrement, increment } from '../redux/CounterSlice'

const Home = () => {
const dispatch = useDispatch()

  const {count} = useSelector(state=>state.counter)
  
  const handleAdd = () => {
    dispatch(increment())
  }

  const handleSubstract = () => {
    dispatch(decrement())
  }
 
  const handleaddbyAmount = () => {
    dispatch(addByAmount(10))
  }

  return (
    <div>
      <h1 className='text-center p-5 text-4xl'>Welcome to Satyal Bazaar</h1>
      <p className='text-center p-3  text-2xl'>Buy More, Save More</p>
       {/* <p>CART: {count} </p>  
       <button onClick={handleAdd}> Add </button>
       <button onClick={handleSubstract}>Subtract</button>
       <button onClick={handleaddbyAmount}>Add by Amount 10</button> */}


      <ToDoList />
   
      </div>
  )
}

export default Home