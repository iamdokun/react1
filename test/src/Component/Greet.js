import React from 'react'; 

// function Greet() {
//     return <h1>Hello Abiodun</h1>
// }

const Greet = (props) => {
    const {name, aka} = props
    return (
        <div>
            <h1>Hello { name }, aka {aka}</h1>
           {props.children}
        </div>
    )
}

export default Greet;