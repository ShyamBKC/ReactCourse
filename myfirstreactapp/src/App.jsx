import { Route, Routes } from "react-router-dom"
import Counter from "./components/Counter"
import Form from "./components/Form"
import Form2 from "./components/Form2"
import Header from "./components/Header"
import { Login } from "./components/Login"
import ToDoList from "./components/ToDoList"
import UserProfile from "./components/UserProfile"
import Home from "./pages/Home"
import About from "./pages/About"
import Navbar from "./components/Navbar"
import ErrorPage from "./components/ErrorPage"
import SinglePage from "./components/SinglePage"
import PrivateRoute from "./utils/PrivateRoute"
import AdminRoute from "./utils/AdminRoute"
import AuthRoute from "./utils/AuthRoute"

import LayoutWithnavbar from "./utils/LayoutWithnavbar"
 
const App = () => {

  const userDetails = [
{
    id: 100,
    username: "Ram",
    age: 10
},
{
  id: 101,
  username: "Shyam",
  age: 10
},
{
  id: 102,
  username: "Elon",
  age: 10
},

]

const username = "John"
const a = 10
const b = 20
const isAdmin = false
const fruits = ["apple","mango","orange","orange"]

  return (
      <div>
      {/* <p>Username is {username}</p>
      <p>The sum of {a} and {b} is {a+b}</p>
      <p>{username} is {isAdmin}</p>
      {
         isAdmin ? <span>You are authorised</span>: <span>You are not authorized</span>
      }

       <ul>
        {
          fruits.map((item,index)  => (
            <li key={index} > {item}</li>
          ))
        }
       </ul> */}


    {/* props */}

    {/* {
      userDetails.map(user=>(
        <UserProfile key={user.id} user={user}  />
      ))
    } */}
     
  {/* <Counter /> */}

  {/* <ToDoList /> */}


  {/* <inline styling /> */}    
    {/* <p style={{color:'red'}}>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, sunt. Commodi maxime obcaecati, nostrum explicabo natus fuga repellendus facilis id, hic ipsum corrupti doloribus dolores quam vitae et tempora sunt!
    </p> */}

{/* <Header /> */}
{/* <Login /> */}

{/* <Form /> */}

{/* <Form2/> */}


{/* <p className="text-lg text-red-600 font-bold italic m-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae perferendis quas placeat iste perspiciatis. Corrupti ratione quisquam deserunt ea culpa voluptatibus, impedit, necessitatibus, a in recusandae eius distinctio sed incidunt.</p>

<div className="
                border-1 border-black
               max-w-6xl
               mx-auto
               rounded-lg
                h-90
                bg-teal-500
                m-6
">
  <p className="text-center p-10 m-10 text-primary">Himalayan bank</p>
  <button className="btn
   ">Click</button>
</div>

<div className="grid gap-4 grid-cols-4 "> 
<div className="bg-teal-400 border border-black rounded-md h-40"></div>
<div className="bg-teal-400 border border-black rounded-md h-40"></div>
<div className="bg-teal-400 border border-black rounded-md h-40"></div>
<div className="bg-teal-400 border border-black rounded-md h-40"></div>
<div className="bg-teal-400 border border-black rounded-md h-40"></div>

</div> */}
{/* <Navbar /> */}
<Routes>

 <Route element = {<LayoutWithnavbar /> } >
  <Route path="/" element={<Home />} /> 

  <Route element = {<PrivateRoute />} >
        <Route path="/about" element={<About />} />
   </Route>

   <Route element = {<AdminRoute />} >
        <Route path="/single/:id" element={<SinglePage />} />
   </Route>

  <Route path="/about" element={<About />} /> 
  <Route path="/single/:id" element={<SinglePage />} /> 
  </Route>

<Route element = {<AuthRoute />} >
    <Route path="/login" element={<Login />} /> 
</Route>
<Route path="*" element={<ErrorPage />} /> 


</Routes>

 </div>
  )
}

export default App