import React, { useEffect, useState } from "react";
import axios from "axios";

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

  return <div>
    {
       todos.slice(0,4)?.map(todo => (

        <div  className="container" key={todo.id}>
            <p>id: {todo.id}</p>
            <p>title: {todo.title}</p>
            <p>category: {todo.category}</p>
           <img src={todo.image} alt="" />
        </div>

       ))
    }
  </div>;
};

export default ToDoList;
