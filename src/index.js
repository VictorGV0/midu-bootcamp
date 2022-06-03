import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { useState } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));

const INITIAL_COUNTER = {
    left: 0,
    right:0,
    mensaje:"mensaje en el estado"
}

const Counter =(props)=>{
  const [contador,setContador] = useState(INITIAL_COUNTER);


const handleClickup= ()=>{
  setContador ({
    ...contador,
    left: contador.left + 1
  });
}
const handleClickdown= ()=>{
  setContador({
    ...contador,
    right: contador.right + 1
  })
}
const handleClickreset= ()=>{
  setContador(INITIAL_COUNTER)
}

const isPar=(value)=>{
  if (value % 2 ===0){
    return true
  }
};

  return (
    <div>
      
      {contador.left}
      <button onClick={handleClickup}>Izquierda</button>
      <button onClick={handleClickdown}>Derecha</button>
      {contador.right}

      {contador.right===0 ?
      '': <p>El numero de la derecha es: {isPar(contador.right) ? 'PAR' : 'IMPAR' }</p>}

      {contador.left===0 ?
      '': <p>El numero de la Izquierda es: {isPar(contador.left) ? 'PAR' : 'IMPAR' }</p>}


      <div>
      <button onClick={handleClickreset}>Reset</button>
      <p>{contador.mensaje}</p>
      <p>Clicks Totales: {contador.right + contador.left}</p>
      </div>

    </div>
  );
};

root.render(
  <React.StrictMode>
    <App />
    <Counter />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint . Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
