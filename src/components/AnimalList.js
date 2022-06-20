import React, { useState } from 'react'

function AnimalList() {

    const [animals, setAnimals] = useState([
        { speaces: 'cat', name: 'Marla', age: new Date().toDateString() },
        { speaces: 'dog', name: 'Rex', age: new Date().toDateString() },
        { speaces: 'horse', name: 'Black', age: new Date().toDateString() },
        { speaces: 'bear', name: 'Brundo', age: '' },
        { speaces: 'fish', name: 'Jonny', age: '' }
    ])

    const handleClick = (e) => {
        const animalToRemove = Number(e.target.parentNode.id);
        const newAnimals = [];
        
        animals.map((animal,index) => {
            if(index !== animalToRemove) {
                newAnimals.push(animal)
            }
        })

        setAnimals(newAnimals);
    }

  return (
    <div>
        <ul>
            { animals.map((animal, index) => (
                <li key={ index } id={index}>
                    <h3>Animal info: </h3>
                    <p><b>Speaces: </b>{ animal.speaces }</p>
                    <p><b>Name: </b>{ animal.name }</p>
                    <p><b>Date of birth: </b>{ animal.age !== '' ? animal.age : 'Unknown' }</p>
                    <button onClick={handleClick}>Remove</button>
                </li>
            )) }
        </ul>
    </div>
  )
}

export default AnimalList;
