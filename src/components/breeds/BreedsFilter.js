import React from "react";

function BreedsFilter({ search, onSearch }) {

    function handleChange(e) {
        onSearch(e.target.value)
    }

    return (
    <input className="search-input" onChange={handleChange} value={search} />
    )
}

export default BreedsFilter;