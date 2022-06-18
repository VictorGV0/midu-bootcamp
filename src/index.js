import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { useState,  } from 'react';
import { FormIndex } from './Form';
import { Giphy } from './Giphy';


const root = ReactDOM.createRoot(document.getElementById('root'));

const INITIAL_COUNTER = {
  left: 0,
  right: 0,
  mensaje: "mensaje en el estado"
}

const Counter = (props) => {
  const [contador, setContador] = useState(INITIAL_COUNTER);
  


  
 const isPar = (value) => {
    if (value % 2 === 0) {
      return true
    }
  };





  return (
    <div>

      {contador.left}
      <button onClick={()=>{setContador({...contador,
            left: contador.left + 1
          })
        }}>Izquierda</button>

      <button onClick={()=>{setContador({...contador,
          right: contador.right + 1
        })
      }}>Derecha</button>
      {contador.right}

      {contador.right === 0 ?
        '' : <p>El numero de la derecha es: {isPar(contador.right) ? 'PAR' : 'IMPAR'}</p>}

      {contador.left === 0 ?
        '' : <p>El numero de la Izquierda es: {isPar(contador.left) ? 'PAR' : 'IMPAR'}</p>}


      <div>
        <button onClick={()=>{setContador(INITIAL_COUNTER)}}>Reset</button>
        <p>{contador.mensaje}</p>
        <p>Clicks Totales: {contador.right + contador.left}</p>
      </div>
      
      
      
    </div>
  );
};

root.render(
  <>
    <App />
    <Counter />
    <FormIndex/>
    <Giphy/>
    
  </>
);


