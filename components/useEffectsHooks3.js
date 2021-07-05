//run Effects only once >> componentDidMount
import { useState, useEffect } from "react"
function USeEffectsHooks3() {
    const [counter, setCounter] = useState(0)
    const [name, setName] = useState("")
    const Counting = () => {
        setCounter(counter + 1)
    }
    const gettingName = (e) => {
        setName(e.target.value)
    }
    useEffect(() => {
        console.log("componentDidMount run only once")
    }, [])
    return (
        <div>
            <h1>React Hooks</h1>
            <input type="text" placeholder="please enter your name" onChange={gettingName} />
            <h3>Button Pressed {counter} Times</h3>
            <button onClick={Counting}>Count</button>
        </div>
    )
}
export default USeEffectsHooks3