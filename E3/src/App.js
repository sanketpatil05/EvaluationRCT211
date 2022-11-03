
import './App.css';
import Button from './Components/Button';
import Image from './Components/Image';
import Todos1 from './Components/Todos1';
import Todos2 from './Components/Todos2';

function App() {
  return (
    <>
    <div>
     <Todos1 />
     <Todos2 />
    </div>
    <div >
      <h1>Image</h1>
     <Image  src={""} alt={""} width={""} height={"300"}/>
     <h1>Button</h1>
     <Button />
    </div>
    </>
  );
}

export default App;
