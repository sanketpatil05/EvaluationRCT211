
import './App.css';
import Button from './Components/Button';
import { Count } from './Components/Count';
import { Counter } from './Components/Counter';
import Image from './Components/Image';
import Todos1 from './Components/Todos1';
import Todos2 from './Components/Todos2';

function App() {
  return (
    <>
    <div style={{display:"flex" ,gap:"100px"} }>
     <Todos1 />
    
    {/* <Counter/>
    
    <Count/>
     */}
    
    
    
    
    
    
     {/* <Todos2 /> */}
    </div>
    {/* <div >
      <h1>Image</h1>
     <Image  src={""} alt={""} width={""} height={"300"}/>
     <h1>Button</h1>
    </div> */}
    </>
  );
}

export default App;
