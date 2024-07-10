import UserProfile from "./components/UserProfile"

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

// const username = "John"
// const a = 10
// const b = 20
// const isAdmin = false
// const fruits = ["apple","mango","orange","orange"]

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

    {
      userDetails.map(user=>(
        <UserProfile key={user.id} user={user}  />
      ))
    }
     

       
      </div>
  )
}

export default App