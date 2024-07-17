import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SinglePage = () => {

    const {id} = useParams() // to get id from url
    const {title} = useParams() // to get id from url

    const [todo, setTodo] = useState(null)

    useEffect(() => {
        const getTodo = async () => {
            try {
                const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
                console.log(res.data);
            }
            catch{
                console.log(error);
            }
        }
        getTodo()
    },[])

    console.log(id);

  return (
    <div className='border border-black text-center'>SinglePage
    
    ToDO is: {id} {title}</div>
  )
}

export default SinglePage