import React, { PropTypes } from 'react';

const SearchInput = ({ handleSearchChange, handleSearchAdventure, value }) => (
    <section className="search-section">
        <h1 className="search-input-h1">Search for an Adventure</h1>
        <input type="text"
            className="input"
            onChange={handleSearchChange}
            onKeyPress={handleSearchAdventure}
            placeholder="Enter a search term"
            value={value} />
    </section>
);

SearchInput.PropTypes = {
    handleSearchChange: PropTypes.func.isRequired,
    handleSearchAdventure: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};

export default SearchInput;
