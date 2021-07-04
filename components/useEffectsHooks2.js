import { useState, useEffect } from "react"
function USeEffectsHooks2() {
    const [counter, setCounter] = useState(0)
    const [name, setName] = useState("")
    const Counting = () => {
        setCounter(counter + 1)
    }
    const gettingName = (e) => {
        setName(e.target.value)
    }
    useEffect(() => {
        console.log("component Update")
    }, [counter])
    return (
        <div>
            <h1>React Hooks</h1>
            <input type="text" placeholder="please enter your name" onChange={gettingName} />
            <h3>Button Pressed {counter} Times</h3>
            <button onClick={Counting}>Count</button>
        </div>
    )
}
export default USeEffectsHooks2