import {useState , useEffect } from "react"
function USeEffectsHooks1() {
    const[counter, setCounter]=useState(0)
    const Counting = () =>{
        setCounter(counter+1)
    }
    useEffect(() => {
        console.log("component Update >> ComponentDidUpdate after state updates")
    })
    return (
        <div>
            <h1>React Hooks</h1>
            <h3>Button Pressed {counter} Times</h3>
            <button onClick={Counting}>Count</button>
        </div>
    )
}
export default USeEffectsHooks1