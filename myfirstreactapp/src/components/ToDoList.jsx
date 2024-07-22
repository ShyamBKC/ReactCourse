import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, addByAmount } from '../redux/CounterSlice'

const ToDoList = () => {

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

 

  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
const [error, setError] = useState('')


  useEffect(() => {
    const getTodos = async () => {

        setIsLoading(true)
        try {
          const response = await axios.get(
            "https://fakestoreapi.com/products"
          );
          setTodos(response.data);
          setIsLoading(false)
          setError()
        } catch (error) {
          console.log(error);
          setError(error)
          setIsLoading(false)
        }
      };

    getTodos();
  }, []);
  
  //console.log(todos);

if (isLoading) return <span>loading ......</span>
if (error) return <span>error fetching data </span>

  return <div className="grid gap-4 grid-cols-4 p-2">
  {
    todos.slice(0, 8)?.map(todo => (
      // <Link to={`/single/${todo.id}`} key={todo.id}>
      <Link>
        <div className=" text-center max-w-xs border border-black p-1 rounded-lg shadow-lg max-h-200 min-h-200">
          {/* <p className="font-bold">ID: {todo.id}</p> */}
          <p className="text-lg">{todo.title}</p>
          <p className="text-sm text-gray-500 pb-5">{todo.category}</p>
          <img className="mt-2 max-h-64" src={todo.image} alt={todo.title} />
          <button onClick={handleAdd}> Add </button>
          <button onClick={handleSubstract}>Subtract</button>
          <button onClick={handleaddbyAmount}> +10</button>
        </div>

 

        {/* <p className="text-sm text-gray-500 pb-5">{todo.category}</p> */}
      </Link>
    ))
  }
</div>

};

export default ToDoList;
