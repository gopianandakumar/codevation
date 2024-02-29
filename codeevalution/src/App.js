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
import HookCounter1 from './Components/HookCounter1';
import HookCounter from './Components/HookCounter';
import EffectFetch from './Components/EffectFetch';
import React,{useReducer} from 'react';
import CompB from './Components/CompB';
import CounterOne from './Components/CounterOne';
import CounterTwo from './Components/CounterTwo';
import CounterThree from './Components/CounterThree';
import ComponentA1 from './Components/ComponentA1';
import ComponentB1 from './Components/ComponentB1';
import ComponentC1 from './Components/ComponentC1';

export const CountContext = React.createContext()


const initialState = 0
const reducer =(state, action)=>{
    switch(action){
        case 'increment':
            return state+1
        case 'decrement':
            return state-1 
        case 'reset':
            return initialState
        default:
            return state
    }
}
export const UserContext = React.createContext()
export const ChannelContext = React.createContext()



function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      <header className="App-header">
        Count-{count}
    <CountContext.Provider value={{ countState:count, countDispatch:dispatch}}>
        <ComponentA1/>
        <ComponentB1/>
        <ComponentC1/>
    </CountContext.Provider>

        {/* <CounterThree/> */}
        {/* <CounterTwo/> */}
        {/* <CounterOne/> */}
        {/* <UserContext.Provider value="formuser context">
          <ChannelContext.Provider value="from channel contex">
          <CompB/>
          </ChannelContext.Provider>
        </UserContext.Provider> */}
        {/* <EffectFetch/> */}
        {/* <HookCounter/> */}
        {/* <HookCouneter/>? */}
        {/* <HookCounter1/> */}
        {/* <HookL/> */}
        {/* <HookCouneter/> */}
        {/* <PostForm/> */}
        {/* <PostList /> */}
        {/* <UserProvider value="Gopi">
        // <CompA/>
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
