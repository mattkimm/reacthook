import React , { useRef, useEffect } from 'react';

function FocusInput(){

    const inputRef = useRef(null);

    useEffect(()=>{    
        //focus input element
        inputRef.current.focus();
    },[])

    return (
        <div>
           <input type="text" ref = {inputRef} />
        </div>
    )
}

export default FocusInput;