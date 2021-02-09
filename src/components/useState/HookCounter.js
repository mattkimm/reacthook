
import React , { useState} from 'react';



function HookCounter(){

    const [number, setNumber]  = useState(0);


    const increase = () => {
        setNumber(number + 1)
    }

    return (
        <div>
            <button onClick ={increase}> Count {number}</button>
        </div>
    )
}

export default HookCounter;