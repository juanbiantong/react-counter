import React, { useState } from 'react'


function Counter2(){
    let [count, setCount] = useState(0);
    function addition(){
        setCount(count +1)
    }

    function substraction(){
        if(count === 0){
            setCount(count = 0)
        } else{
            setCount(count -1)
        }
        
    }

    function reset(){
        setCount(count = 0)
    }

    return(
        <div>
            <h1>Count : {count}</h1>
            <button onClick = {addition}>Tambah</button>
            <button onClick = {substraction}>Kurang</button>
            <button onClick = {reset}>Reset</button>

        </div>
    )
}

export default Counter2;