import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { useState } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Counter =(props)=>{
  const [contadorValue,updateContador] = useState({
    left: 0,
    right:0,
    clicks:0,
    mensaje:"mensaje en el estado",
  });

const handleClickup= ()=>{
  updateContador ({
    ...contadorValue,
    left: contadorValue.left + 1,
    clicks: contadorValue.clicks + 1
  });
}
const handleClickdown= ()=>{
  updateContador({
    ...contadorValue,
    right: contadorValue.right + 1,
    clicks: contadorValue.clicks + 1
  })
}
const handleClickreset= ()=>{
  updateContador({
    ...contadorValue,
    right: contadorValue.right =0,
    left: contadorValue.left =0,
    clicks: contadorValue.clicks =0
  })
}



const isPar = contadorValue.right % 2 ===0;
const msj = isPar ? 'PAR' : 'IMPAR'
const isPari = contadorValue.left % 2 ===0;
const msji = isPari ? 'PAR' : 'IMPAR'

  return (
    <div>
      
      {contadorValue.left}
      <button onClick={handleClickup}>Izquierda</button>

      
      <button onClick={handleClickdown}>Derecha</button>
      {contadorValue.right}

      <p>El numero de la derecha es: {msj}</p>
      <p>El numero de la Izquierda es: {msji}</p>


      <div>
      <button onClick={handleClickreset}>Reset</button>
      <p>{contadorValue.mensaje}</p>
      <p>Clicks Totales: {contadorValue.clicks}</p>
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
