import {useState} from "react"
function Hooks1()
{
    const[counter, setCounter]=useState(0)
    const Counting = () =>{
        setCounter(counter+1)
    }
    return(
        <div>
            <h1>React Hooks</h1>
            <h3>Button Pressed {counter} Times</h3>
            <button onClick={Counting}>Count {counter}</button>
        </div>
    )
}
export default Hooks1