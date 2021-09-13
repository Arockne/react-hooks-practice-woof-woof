import React, { useState, useEffect } from "react";
import DogList from './DogList'
import DogInfo from './DogInfo'

function App() {
  const [dogInfo, setDogInfo] = useState('')
  const [pups, setPups] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/pups')
    .then(r => r.json())
    .then(setPups)
  }, [])

  function handleMoreInfo(pupObj) {
    setDogInfo(pupObj)
  }

  function handleDogEdit(dog) {
    setPups(pups.map(pup => {
      if (pup.id === dog.id) {
        return dog;
      }
      return pup;
    }))
  }

  return (
    <div className="App">
      <DogList pups={pups} onMoreInfo={handleMoreInfo}/>
      <DogInfo dog={dogInfo} onDogEdit={handleDogEdit}/>
    </div>
  );
}

export default App;
