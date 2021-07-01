import {useState} from "react"
function Hooks1()
{
    const[counter, setCounter]=useState(0)
    const Increment = () =>{
        setCounter(counter+1)
    }
    const Decrement  = () =>{
        setCounter(counter-1)
    }

    const Reset = () =>{
        setCounter(counter*0)
    }

    return(
        <div>
            <h1>React Hooks</h1>
            <button onClick={Decrement}>-</button><h3 style={{display:"inline"}}>Button Pressed {counter} Times</h3><button onClick={Increment}>+</button>
            <button onClick={Reset}>Reset</button>
        </div>
    )
}
export default Hooks1