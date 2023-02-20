import React from 'react';
import ReactDOM from 'react-dom/client';
import {Button} from './Button'
import {Greeting} from './Greeting'
import {TaskCard} from './Task'
import {Saludar} from './Saludar'
import {Posts} from './Post'

//eventos
// const handleChanged= (e)=>{
//     console.log(e.target.value+"...")
// }

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<>
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

<Posts></Posts>


</>)
