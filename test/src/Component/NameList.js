import React from 'react'
import Person from '../Component/Person'


function NameList() {
    const names = ['Kenny', 'Mercy', 'Abbey']
    const persons = [
        {
            id: 1,
            name: 'Abbey',
            age: 30,
            skill: 'Software Developer'
        },
        {
            id: 2,
            name: 'Dami',
            age: 27,
            skill: 'HR'
        },
        {
            id: 3,
            name: 'Temi',
            age: 25,
            skill: 'Finance Manager'
        },
        {
            id: 4,
            name: 'Daniel',
            age: 22,
            skill: 'Mobile Developer'
        },
        {
            id: 5,
            name: 'Victorial',
            age: 14,
            skill: 'Student'
        }
    ]
    const nameList = names.map((name, index) => <h2 key={index}>{index} I am {name}</h2>)
    // const personList = persons.map(person => <Person key={person.id } person={person} />)
    return (
        <div>
           {nameList}
            {/* <h2>{names[0]}</h2>
            <h2>{names[1]}</h2>
            <h2>{names[2]}</h2> */}
        </div>
    )
}

export default NameList
