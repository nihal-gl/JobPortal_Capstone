import TestComponent from './TestComponent';

import Login from './login';
import PranjalDummyComp from './PranjalDummyComp';
import TestComponentNihal from './TestComponentNihal'
import Shashwatcomponent from './ShashwatComponent/Shashwatcomponent';
import TestRachit from './TestRachit';

function App() {
  return (
    <div className="App">
      {/* RENDER YOU COMPONENT HERE */}
      <TestComponent></TestComponent>
      <Login></Login>
      <PranjalDummyComp></PranjalDummyComp>
      <TestComponentNihal></TestComponentNihal>
      <Shashwatcomponent></Shashwatcomponent>
      <TestRachit></TestRachit>
    </div>
  );
}

export default App;