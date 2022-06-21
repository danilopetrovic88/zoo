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

    const moveToTop = (e) => {
        const newAnimals = [...animals.slice(e.target.parentNode.id), ...animals.slice(0, e.target.parentNode.id)]

        setAnimals(newAnimals)
    }

    const addAnimal = (e) => {
        e.preventDefault()
        const speacesInput = e.target.speaces.value;
        const nameInput = e.target.name.value;
        const ageInput = e.target.age.value;

        const newAnimals = [...animals, {speaces: speacesInput, name: nameInput, age: ageInput}]

        setAnimals(newAnimals);
    }

  return (
    <div>

    <form onSubmit={addAnimal}>
        <input type="text" placeholder='speaces' name='speaces' id='speaces' onChange={e => e.target.value} /><br/>
        <input type="text" placeholder='name' name='name' id='name' onChange={e => e.target.value} /><br/>
        <input type="date" placeholder='date of birth' id='age' onChange={e => e.target.value} /><br/>
        <button>Add Animal</button>
    </form>

        <ul>
            { animals.map((animal, index) => (
                <li key={ index } id={index}>
                    <h3>Animal info: </h3>
                    <p><b>Speaces: </b>{ animal.speaces }</p>
                    <p><b>Name: </b>{ animal.name }</p>
                    <p><b>Date of birth: </b>{ animal.age !== '' ? animal.age : 'Unknown' }</p>
                    <button onClick={handleClick}>Remove</button>
                    <button onClick={moveToTop}>Move to top</button>
                </li>
            )) }
        </ul>
    </div>
  )
}

export default AnimalList;
