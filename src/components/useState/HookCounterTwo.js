import React , {useState} from 'react';


function HookCounterTwo(){

    const initialCount = 0;
    const [count, setCount] =useState(initialCount);

    const incrementFive = () => {
        for(let i =0; i <5 ; i++){
            setCount(prevCount => prevCount + 1)
        }
    }
    return (
        <div>
            Count :{count}
            <button onClick= {()=>setCount(initialCount)}> RESET</button>
            <button onClick= {()=>setCount((prevCount)=> prevCount + 1)}>INCREMENT</button>
            <button onClick= {()=>setCount((prevCount)=> prevCount -1)}>DECREMENT</button>
            <button onClick ={incrementFive}>INCREMENT 5</button>
        </div>
    )

}


export default HookCounterTwo;