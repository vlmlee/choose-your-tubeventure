import React, { PropTypes } from 'react';

const SearchInput = ({ handleSearchChange, handleSearchAdventure, value }) => (
    <section className="search-section">
        <input type="text"
            className="input"
            onChange={handleSearchChange}
            onKeyPress={handleSearchAdventure}
            placeholder="Search for an adventure"
            value={value} />
        <h1 className="search-input-h1">Search Results</h1>
    </section>
);

SearchInput.PropTypes = {
    handleSearchChange: PropTypes.func.isRequired,
    handleSearchAdventure: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};

export default SearchInput;
