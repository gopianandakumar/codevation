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
import ParentComponent from './Components/ParentComponent';
import UserGreeting from './Components/UserGreeting';
import NameList from './Components/NameList';
import StyleSheet from './Components/StyleSheet';
import Inline from './Components/Inline';
import Form from './Components/Form';
import FragmentDemo from './Components/FragmentDemo';
import ParentComp from './Components/ParentComp';
import RefsDemo from './Components/RefsDemo';
import Hero from './Components/Hero';
import ErrorBoundary from './Components/ErrorBoundary';
import Counterc from './Components/Counterc';
import CompA from './Components/CompA';
import Compc from './Components/Compc';
import {UserProvider} from './Components/UserContext'
import PostList from './Components/PostList';
import PostForm from './Components/PostForm';
import HookCouneter from './Components/HookCouneter';
import HookL from './Components/HookL';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HookL/>
        {/* <HookCouneter/> */}
        {/* <PostForm/> */}
        {/* <PostList /> */}
        {/* <UserProvider value="Gopi">
        <CompA/>
        </UserProvider> */}
        {/* <Counterc/> */}
        {/* <ErrorBoundary>
        <Hero heroName='SuperMan'/>
        </ErrorBoundary>
        <ErrorBoundary>
        <Hero heroName='BatMan'/>
        </ErrorBoundary>
        <ErrorBoundary>
        <Hero heroName='joker'/>
        </ErrorBoundary>

        <RefsDemo /> */}
        {/* <ParentComp/> */}
        {/* <FragmentDemo/> */}
        {/* <Form /> */}
        {/* <Inline/> */}
        {/* <StyleSheet name={true} /> */}
        {/* <NameList /> */}
        {/* <UserGreeting /> */}
        {/* <ParentComponent/> */}
        {/* <EventBind/> */}
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
