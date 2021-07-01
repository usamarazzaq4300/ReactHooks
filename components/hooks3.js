import { useState } from "react"
function Hooks3() {
    const [name, setName] = useState({ firstName: "", lastName: "" })
    const First = (e) => {
        setName({ ...name, firstName: e.target.value })
    }
    const Last = (e) => {
        setName({ ...name, lastName: e.target.value })
    }
    return (
        <div>
            <h1>React useState Object</h1>
            <input type="text" placeholder="Enter Your First Name" onChange={First} />
            <br /><br />
            <input type="text" placeholder="Enter Your Last Name" onChange={Last} />
            <h2>Your First name is: {name.firstName}</h2>
            <h2>Your Last name is: {name.lastName}</h2>
        </div>
    )
}
export default Hooks3