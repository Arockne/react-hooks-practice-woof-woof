import React from 'react'

function DogList({ pups, onMoreInfo, onOnlyGoodDog, onlyGoodDog }) {
  return (
    <>
      <div id="filter-div">
        <button id="good-dog-filter" onClick={() => onOnlyGoodDog(onlyGoodDog => !onlyGoodDog)}>Filter good dogs: {onlyGoodDog ? 'ON' : 'OFF'}</button>
      </div>
      <div id="dog-bar">
        {
          pups.map(pup => (
              <span 
                key={pup.id} 
                onClick={() => { 
                  onMoreInfo(pup) 
                } }
              >
              {pup.name}
              </span>
            )
          )
        }
      </div>
    </>
  )
}

export default DogList