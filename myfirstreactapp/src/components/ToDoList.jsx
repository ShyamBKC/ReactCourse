import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ToDoList = () => {
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

  return <div className="grid gap-4 grid-cols-4 p-4">
  {
    todos.slice(0, 4)?.map(todo => (
      <Link to={`/single/${todo.id}`} key={todo.id}>
        <div className="container text-center max-w-xs border p-1 rounded-lg shadow-lg">
          <p className="font-bold">ID: {todo.id}</p>
          <p className="text-lg">{todo.title}</p>
          <p className="text-sm text-gray-500 pb-5">{todo.category}</p>
          <img className="mt-2" src={todo.image} alt={todo.title} />
        </div>
      </Link>
    ))
  }
</div>

};

export default ToDoList;
