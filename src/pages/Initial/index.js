import Mensaje, {Descripcion} from '../../components/Mensaje.js'
import { Counter } from '../../components/Counter';


export function Initial() {

    return (
      <div className="App">
       <Mensaje color='red' message='Renderizando '/> 
       <Mensaje color='green' message='un componente de'/> 
       <Mensaje color='yellow' message='react'/> 
        <Descripcion/>
        
    
        <Counter/>
        
  
        
       
        
      </div>
      
    );
  }