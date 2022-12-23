import React, { useContext } from "react";
import { EnergyContext } from "../context/energy";

function ActivitiesFilter() {
    const { energy, setEnergy } = useContext(EnergyContext)

    function handleChange(e) {
        setEnergy(e.target.value)
    }

    return (
    <select onChange={handleChange} name="activities" value={energy}>
        <option>-</option>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
    </select>
    )
}

export default ActivitiesFilter;