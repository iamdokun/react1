import React from 'react'


function Person({person}) {

    return (
        <div>
            <h2>I am {person.name}, i am {person.age} year old, i am a {person.skill} </h2>
        </div>
    )
}

export default Person
