import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Hello from './Components/Hello';
import Message from './Components/Message';
import Counter from './Components/Counter';
import FunClick from './Components/FunClick';
import ClsClick from './Components/ClsClick';
import EventBind from './Components/EventBind';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <EventBind/>
        {/* <FunClick/>
        <ClsClick/> */}
        {/* <Counter/> */}
        {/* <Message/> */}
       {/* <Greet />
       <Welcome /> */}
       {/* <Hello name="Bruce" heroName="Batman"><p>to display childrn</p> </Hello>
       <Hello  name="Clark" heroName="SuperMan"><button>Click</button></Hello>
       <Hello name="Diana" heroName="WondeWoman"><button>childerdian</button></Hello>



      <Welcome name="Bruce" heroName="Batman" />
      <Welcome name="Clark" heroName="SuperMan"/>
      <Welcome name="Diana" heroName="WondeWoman"/> */}
      </header>
    </div>
  );
}

export default App;
