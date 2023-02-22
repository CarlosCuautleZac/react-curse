import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Button } from "./Button";
import { Greeting } from "./Greeting";
import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";
import { Posts } from "./Post";

//eventos
// const handleChanged= (e)=>{
//     console.log(e.target.value+"...")
// }

const users = [
  {
    id: 1,
    name: "Ryan",
    image: "https://robohash.org/user2",
  },
  {
    id: 2,
    name: "Bryan",
    image: "https://robohash.org/user3",
  },
  {
    id: 3,
    name: "Marcos",
    image: "https://robohash.org/user4",
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));

function Counter() {
  const [mensaje, setMensaje] = useState("");
  
  const[counter, setCounter] =useState(0);

  useEffect(() => {
    console.log("Render");
  }, [counter]);

  return (
    <div>
      <input onChange={(e) => setMensaje(e.target.value)}></input>
      <button
        onClick={() => {
          alert("El mensaje es: " + mensaje);
        }}
      >
        Save
      </button>

      <hr></hr>
      <h1>Counter: {counter}</h1>
      <button onClick={()=>{
        setCounter(counter+1);
      }}>Sumar</button>

      {/* <h1>Counter: {counter}</h1>
      <button onClick={()=>{
        setCounter(counter+1);
      }}
      >Sumar</button>


<button onClick={()=>{
        setCounter(counter-1);
      }}
      >Restar</button>

<button onClick={()=>{
        setCounter(0);
      }}
      >Reiniciar</button> */}
    </div>
  );
}
root.render(
  <>
    <Counter></Counter>

    {/* {users.map((user,i)=>{
    return <div key={i}>
        <h1>{user.name}</h1>
        <img src={user.image}></img>
    </div>
})} */}

    {/* <TaskCard ready={true}></TaskCard>
<Saludar></Saludar>
<Button text="Saludar"></Button>
<form onSubmit={(e)=>{
    e.preventDefault()
    alert("Se ha enviado el elemento")
}}>
    <h1>Registro de usuario</h1>
    <button>Send</button>
</form> */}

    {/* <Posts></Posts> */}
  </>
);
