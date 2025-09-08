import { useState } from "react";

function ButtonPress(){
    const [name, setName] = useState("Dan")

    return(
        <>
        <h1>Hellow {name}</h1>
        <button onClick={() => setName('Hindi Si Dan')}>Change Name</button>
        <tryLang props={true} />
        </>
    ) 
}

function tryLang(props) {
    const { user } = props
    
    let button = <button> Login </button>

    if (user) {
        button = <button> Logout </button>
    }

    return (
        <>
            <h1>hello There!</h1>
            {button}
        </>
    )
}

export default ButtonPress