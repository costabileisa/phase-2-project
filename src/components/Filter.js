import React, { useState } from "react";

function Filter({ type, onSearch }) {
    const [search, setSearch] = useState(null)

    function handleChange(e) {
        setSearch(e.target.value)
        onSearch(search)
    }

    function getJSX() {
        return (
            <select>
                <option>-</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
        </select>
        )
    }

    let filter;
    if (type === "input") {
        filter = <input onChange={handleChange} name={search} value={search}></input>
    } else if (type === "option") {
        filter = getJSX()
    }

    return (
        <>
            {filter}
        </>
    )
}

export default Filter;