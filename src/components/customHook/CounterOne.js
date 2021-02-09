import React, {useState} from 'react';
import useCounter from './useCounter';

function CounterOne(){
    const [count, increment,decrement,reset] = useCounter(0,1);
   
    return (
        <div>
            <h2>Count ={count}</h2>
           <button onClick={increment}>INCREMENT</button>
           <button onClick={decrement}>DECREMENT</button>
           <button onClick={reset}>RESET</button>
        </div>
    )
}

export default CounterOne;