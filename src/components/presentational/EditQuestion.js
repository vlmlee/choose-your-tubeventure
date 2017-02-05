import React, { PropTypes } from 'react';

const EditQuestion = ({ handleMagicWord, tryMagicWord }) => (
    <section>
        <h1 className="question">What's the magic word?</h1>
        <input type="password"
            className="input"
            onChange={handleMagicWord}
            onKeyPress={tryMagicWord}
            placeholder="" />
    </section>
);

EditQuestion.propTypes = {
    text: PropTypes.string.isRequired,
};

export default EditQuestion;