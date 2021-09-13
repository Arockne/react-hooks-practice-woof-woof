import React from 'react'

function DogInfo({ dog, onDogEdit }) {
  const {id, name, isGoodDog, image} = dog

  function handleGoodToggle() {
    const updatedDog = { ...dog, isGoodDog: !isGoodDog}
    fetch(`http://localhost:3001/pups/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedDog)
    })
    .then(r => r.json())
    .then(data => {
      onDogEdit(data)
    })
  }

  return (
    <div id="dog-summary-container">
      <h1>DOGGO:</h1>
      <div id="dog-info">
        {
          dog ?
          <>
            <img src={image} alt={name}/>
            <h2>{name}</h2>
            <button onClick={handleGoodToggle}>{isGoodDog ? 'Good Dog!' : 'Bad Dog'}</button>
          </>
          :
          null
        }
      </div>
    </div>
  )
}

export default DogInfo