import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment , decrement ,reset , incrementByAmount} from './counter/counterSlice';

export const Counter = () => 
{
    const count = useSelector((state)=> state.counter.count)

    const dispatch = useDispatch();

    
    const [incr,setIncr] = useState(0);

    const addValue = Number(incr) || 0;

    const resetAll = () => {
        setIncr(0);
        dispatch(reset());

    }

    return (
        <>
            <p>{count}</p>
            <button onClick={()=>dispatch(increment())}> + </button>
            <button onClick={()=>dispatch(decrement())}> - </button>
            <input type = "text" 
              value = {incr}
              onChange = {(e)=>{setIncr(e.target.value)}} 
              />
              <button onClick={()=>{
                  dispatch(incrementByAmount(addValue))
              }}>SetIncrement</button>

            <button onClick={resetAll}> ResetAll</button>

        </>
  )
}
