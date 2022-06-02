import './App.css';
import Mensaje from './Mensaje.js'

const Descripcion =()=>{
return <p>Esta es la app del bootcamp de react de midudev</p>
}
function App() {
  return (
    <div className="App">
     <Mensaje color='red' message='Renderizando '/> 
     <Mensaje color='green' message='un componente de'/> 
     <Mensaje color='yellow' message='react'/> 
      <Descripcion/>
    </div>
  );
}

export default App;
