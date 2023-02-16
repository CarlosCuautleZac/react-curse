import React from 'react';
import ReactDOM from 'react-dom/client';
import {Button} from './Button'



const root = ReactDOM.createRoot(document.getElementById('root'));

function Greeting(){
    const name = false
     return <h1>{name?'Estoy casado':'No estoy casado'}</h1>
};


root.render(<>
<Button text="lo que quieras"></Button>
<Button text={3000}></Button>
</>)
