import React, { useState } from "react";


function Counter(){
    const [ Count, setCount]= useState(0)


    const  increase =()=>{
        setCount(Count+1) ;   
    }
    const  decrease =()=>{
        setCount(Count-1) ;   
    }
    const  Reset =()=>{
        setCount(0) ;   
    }


    return(
        <>
        <div style={{display:"flex", justifyContent:"center"}}>
        <button onClick={increase}>increase</button>
        <h2>{Count}</h2>
        <button onClick={decrease}>decrease</button>
        <button onClick={Reset}> Reset</button>
        </div>
        </>
    )
}
export default Counter;