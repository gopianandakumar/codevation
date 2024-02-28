import React,{useReducer} from 'react'

const initialState = {
    FirstCounter:0,
    SecondCounter:10,
}
const reducer =(state, action)=>{
    switch(action.type){
        case 'increment':
            return {...state,FirstCounter:state.FirstCounter+action.value}
        case 'decrement':
            return {...state,FirstCounter:state.FirstCounter-action.value}
            case 'increment2':
                return {...state,SecondCounter:state.SecondCounter+action.value}
            case 'decrement2':
                return {...state,SecondCounter:state.SecondCounter-action.value}
        case 'reset':
            return initialState
        default:
            return state
    }
}

function CounterTwo() {
    const [count , dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        <div>Counter:{count.FirstCounter}
        Counter:{count.SecondCounter}</div>
        <div>
            <button onClick={()=>dispatch({type:'increment', value:1})}>Increment</button>
            <button onClick={()=>dispatch({type:'decrement',value:1})}>Decrement</button>
            <button onClick={()=>dispatch({type:'increment',value:5})}>Increment5</button>
            <button onClick={()=>dispatch({type:'decrement',value:5})}>Decrement5</button>
            <button onClick={()=>dispatch({type:'increment2',value:5})}>Increment5counter2</button>
            <button onClick={()=>dispatch({type:'decrement2',value:5})}>Decrement5cojnter2</button>
           
            
            
            <button onClick={()=>dispatch({type:'reset'})}>Reset</button>

        </div>
    </div>
  )
}

export default CounterTwo