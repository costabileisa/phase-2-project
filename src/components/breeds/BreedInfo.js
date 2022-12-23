import React from "react";

function BreedInfo({ breed }) {
    const { name, subBreeds } = breed

    const sub = subBreeds.map(subB => <li key={subB}>{subB}</li>)
    return (
        <tr>
            <td className="breed-info">{name}</td>
            <td className="breed-info">
                <ul className="sub-breed">
                    {sub}
                </ul>
            </td>
        </tr>
    )
}

export default BreedInfo;