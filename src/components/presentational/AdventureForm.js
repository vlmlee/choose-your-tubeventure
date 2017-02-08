import React, { PropTypes } from 'react';

const AdventureForm = ({
    pageId,
    name,
    creator,
    description,
    youtubeId,
    handleUserInfoChange,
    createBreakpoint,
    createAdventure
}) => (
    <section className="adventure-form">
        <section className="adventure-info">
            <input type="text"
                className="adventure-form-input"
                onChange={(e) => handleUserInfoChange(e, 'name')}
                placeholder="Enter a name for this adventure"
                value={name} />
            <input type="text"
                className="adventure-form-input"
                onChange={(e) => handleUserInfoChange(e, 'creator')}
                placeholder="Created by"
                value={creator} />
            <input type="text"
                className="adventure-form-input"
                onChange={(e) => handleUserInfoChange(e, 'description')}
                placeholder="Add a description"
                value={description} />
            <input type="text"
                readOnly
                className="adventure-form-input adventure-form-youtube"
                placeholder="Youtube ID"
                value={"Youtube ID: " + youtubeId} />
            <input type="password"
                className="adventure-form-input adventure-form-secret"
                onChange={(e) => handleUserInfoChange(e, 'secret')}
                placeholder={ pageId === 'create' ? "Enter a secret word" : "Change your secret word" } />
        </section>
        <input type="button"
            className="adventure-form-submit"
            onClick={() => createBreakpoint('decisions')}
            value="ADD BREAKPOINT+" />
        <input type="button"
            className="adventure-form-submit"
            onClick={() => createBreakpoint('endings')}
            value="ADD ENDING+" />
        <input type="button"
            className="adventure-form-submit adventure-form-create"
            onClick={() => createAdventure()}
            value={pageId === 'create' ? "CREATE ADVENTURE" : "EDIT ADVENTURE"} />
    </section>
);

AdventureForm.propTypes = {
    pageId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    creator: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    youtubeId: PropTypes.string.isRequired,
    handleUserInfoChange: PropTypes.func.isRequired,
    createBreakpoint: PropTypes.func.isRequired,
    createAdventure: PropTypes.func.isRequired,
};

export default AdventureForm;
