import React from "react";

function BreedInfo({ breed }) {
    const { name, subBreeds } = breed

    const sub = subBreeds.map(subB => <li className={breed}>{subB}</li>)
    return (
        <div className="breed" id={name}>
            <h3 className="breed-header">{name}</h3>
            <ul>
              {sub}
            </ul>
        </div>
    )
}