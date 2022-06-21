import React, { useState } from 'react'

function AnimalList() {

    const [animals, setAnimals] = useState([
        { speaces: 'cat', name: 'Marla', age: new Date().toDateString(), sector: 'cats' },
        { speaces: 'dog', name: 'Rex', age: new Date().toDateString(), sector: 'dogs' },
        { speaces: 'horse', name: 'Black', age: new Date().toDateString(), sector: 'horses' },
        { speaces: 'bear', name: 'Brundo', age: '', sector: 'wild animals' },
        { speaces: 'fish', name: 'Jonny', age: '', sector: 'water animals' }
    ])

    const sectors = ['cats', 'birds', 'dogs', 'horses', 'wild animals', 'snakes', 'water animals']

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
        const sectorInput = e.target.sectors.value;

        const newAnimals = [...animals, {speaces: speacesInput, name: nameInput, age: ageInput, sector: sectorInput}]

        setAnimals(newAnimals);
    }

    const checkAnimals = (e) => {
        const sectorName = e.target.parentNode.firstChild.innerHTML.toString();

        const animalList = [];
        animals.filter(animal => {
            if(animal.sector === sectorName) {
                animalList.push(animal);
            }
        })

        alert(animalList.map(animal => 'Animal sector: ' + animal.sector + ', Name: ' + animal.name + ', Speaces: ' + animal.speaces + ', Age: ' + animal.age + '---------------------------'))
    }

  return (
    <div>

    <form onSubmit={addAnimal}>
        <input type="text" placeholder='speaces' name='speaces' id='speaces' onChange={e => e.target.value} /><br/>
        <input type="text" placeholder='name' name='name' id='name' onChange={e => e.target.value} /><br/>
        <input type="date" placeholder='date of birth' id='age' onChange={e => e.target.value} /><br/>
        <label htmlFor="sectors">Sector: </label><select name="sectors" id="sectors" onChange={ e => e.target.value }>
            { sectors.map((sector, index) => (
                <option key={index} value={ sector }>{ sector }</option>
            )) }
        </select><br/>
        <button>Add Animal</button>
    </form>

        <ul>
            { animals.map((animal, index) => (
                <li key={ index } id={index}>
                    <h3>Animal info: </h3>
                    <p><b>Speaces: </b>{ animal.speaces }</p>
                    <p><b>Name: </b>{ animal.name }</p>
                    <p><b>Date of birth: </b>{ animal.age !== '' ? animal.age : 'Unknown' }</p>
                    <p><b>Sector: </b>{ animal.sector }</p>
                    <button onClick={handleClick}>Remove</button>
                    <button onClick={moveToTop}>Move to top</button>
                </li>
            )) }
        </ul>

        <div>
            <h3>Sectors: </h3>
            <ul>
                { sectors.map((sector,index) => (
                    <li key={index} id={index}>
                        <p>{ sector }</p>
                        <button onClick={checkAnimals}>Check animals</button>
                    </li>
                )) }
            </ul>
        </div>
    </div>
  )
}

export default AnimalList;
