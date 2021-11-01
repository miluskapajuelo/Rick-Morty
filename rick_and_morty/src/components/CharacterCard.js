import React from 'react'

function CharacterCard({ character }) {
    return (
        <div className="card" style={{width: '18rem', margin:'10px'}}>
            <img src={character.image} alt="image" />
            <div className="card-body">
                <h3> {character.name}</h3>
                <p className="card-text"> {character.status}</p>
                <p className="card-text"> {character.created}</p>
            </div>
        </div>
    )
}

export default CharacterCard
