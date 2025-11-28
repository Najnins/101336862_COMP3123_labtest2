import React, { useState } from "react";

function Search({ setCity }) {
    const [input, setInput] = useState("");

    const handleSearch = () => {
        if (input.trim()) setCity(input);
    };

    return (
        <div className="search-box">
            <input
                type="text"
                placeholder="Enter city name"
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}

export default Search;
