import './App.css';
import {ComponentClass} from './componentes/componentClass';
import {ComponentClass2} from './componentes/componentClass';
import {ComponentFunc, ComponentFunc2} from './componentes/ComponentFunc';
import {ComponentButton} from './componentes/ComponentButton';

function App() {
  return (
    <div className="App">
      <ComponentClass/>
      <ComponentClass2/>
      <ComponentFunc />
      <ComponentFunc2 />
      <ComponentButton/>
    </div>
  );
}
export default App;
