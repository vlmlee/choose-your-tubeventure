import React, { PropTypes } from 'react';

const AdventureForm = ({ createAdventure, handleNameChange, createCollapsable}) => (
    <section className="adventure-form">
        <form onSubmit={createAdventure}>
            <input type="text"
                className="adventure-form-input"
                onChange={handleNameChange}
                placeholder="Enter a name" />
            <input type="submit"
                className="adventure-form-submit"
                value="Create Adventure" />
        </form>
        <input
            type="button"
            onClick={createCollapsable}
            value="Add extension" />
    </section>
);

export default AdventureForm;
