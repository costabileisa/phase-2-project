import React, { useState, useEffect } from "react";
import BreedInfo from "./BreedInfo";

function Breeds() {
    const [breeds, setBreeds] = useState([])

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/list/all")
        .then(res => res.json())
        .then(data => {
            const list = data.message;
            const tempArr = []
            for (const [key, value] of Object.entries(list)) {
                const breedObjectData = {
                    name: key,
                    subBreeds: value
                }
                tempArr.push(breedObjectData)
            }
            setBreeds(tempArr)
        })
    }, [])

    const getBreedInfo = breeds.map(breed => <BreedInfo key={breed.name} breed={breed} />)

    return (
        <div className="breeds-container">
            <table className="breeds-table">
                <tbody>
                    <tr>
                        <th className="breeds-header">Breeds</th>
                        <th className="breeds-header">Sub-Breeds</th>
                    </tr>
                        {getBreedInfo}
                </tbody>
            </table>
        </div>
    )
}

export default Breeds;