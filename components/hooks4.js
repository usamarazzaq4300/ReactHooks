import { useState } from "react"
function Hooks4() {
    const [items, setItems] = useState([1,2,3,4,5])
    const AddItem = () =>
    {
        var newNum = Math.ceil(Math.random()*10)
        setItems([...items , newNum])
    }
    return (
        <div>
        <h1>React useState Arrays</h1>
        <button onClick={AddItem}>Add item</button>
        <ul>
        {
            items.map( item =>{
                return(
                   <li>{item}</li>
                )
            })
        }
        </ul>
        </div>
    )
}
export default Hooks4