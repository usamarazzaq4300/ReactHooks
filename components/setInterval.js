import {useState , useEffect} from "react"
function LearningSetInterval()
{
    const[counter , setCounter]=useState(0)
    const Incrementer = () =>{
        setCounter(counter+1)
    }
    useEffect(()=>{
        const interval = setTimeout(Incrementer, 1000)
    },)
    return(
        <div>
            <h3 style={{textAlign:"center"}}>{counter}</h3>
        </div>
    )
}
export default LearningSetInterval