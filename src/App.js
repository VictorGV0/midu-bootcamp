import React, { useState } from 'react';
import './App.css';
import Mensaje, {Descripcion} from './components/Mensaje.js'
import { Counter } from './components/Counter';
import { FormIndex } from './components/Form';
import { ListOfGif } from './components/ListOfGif';



function App() {
const [keyword, setKeyword] = useState('panda')


  return (
    <div className="App">
     <Mensaje color='red' message='Renderizando '/> 
     <Mensaje color='green' message='un componente de'/> 
     <Mensaje color='yellow' message='react'/> 
      <Descripcion/>
      
  
      <Counter/>
      <FormIndex/>
      <button onClick={()=>{setKeyword('dua lipa')}}>cambiar gif</button>
      <ListOfGif keyword={keyword}/>
      
    </div>
    
  );
}

export default App;
