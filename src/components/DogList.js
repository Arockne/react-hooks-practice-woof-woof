import React from 'react'

function DogList({ pups, onMoreInfo }) {

  return (
    <>
      <div id="filter-div">
        <button id="good-dog-filter">Filter good dogs: OFF</button>
      </div>
      <div id="dog-bar">
        {
          pups.map(pup => <span key={pup.id} onClick={() => onMoreInfo(pup)}>{pup.name}</span>)
        }
      </div>
    </>
  )
}

export default DogList