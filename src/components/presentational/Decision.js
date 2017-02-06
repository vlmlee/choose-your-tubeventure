import React, { PropTypes } from 'react';
import Collapse, { Panel } from 'rc-collapse';

const Decision = ({
    index,
    choices,
    addChoice,
    removeChoice,
    handleChoiceChange,
    handleEditMode,
    handleEndEditMode
}) => (
    <section className="decision">
        {(() => {
            if (index === 0) {
                return (
                    <section>
                        <h1>
                            <span className="breakpoint-type">Start: </span>
                            interval between _ and _
                        </h1>
                        <input type="button"
                            className="choice-button"
                            onClick={() => addChoice(index)}
                            value="ADD CHOICE+" />
                        <Collapse
                            className="collapse"
                            accordion={false}>
                            { choices.length >= 0 &&
                                ( choices.map((j, j_index) => (
                                    <Panel key={j_index}
                                        className="panel"
                                        header={"Choice " + (j_index+1)}>
                                        { j.editMode ?
                                            ( <textarea
                                                className="choice-input"
                                                onKeyPress={(e) => handleEndEditMode(e, index, j.id)}
                                                onChange={(e) => handleChoiceChange(e, index, j_index)}
                                                placeholder="Enter a description for this choice"
                                                value={j.description} /> )
                                        : <div className="choice-description"
                                            onClick={() => handleEditMode(index, j_index)}>
                                            <span className="choice-description-editable">
                                                Description: </span>{j.description}
                                        </div> }
                                        <input type="button"
                                            className="choice-button choice-button-remove"
                                            onClick={() => removeChoice(index, j_index)}
                                            value="DELETE CHOICE&mdash;" />
                                    </Panel> ))
                            )}
                        </Collapse>
                    </section>
                )
            } else {
                return (
                    <section>
                        <h1>
                            <span className="breakpoint-type">Decision: </span>
                            interval between _ and _
                        </h1>
                        <input type="button"
                            className="choice-button"
                            onClick={() => addChoice(index)}
                            value="ADD CHOICE+" />
                        <Collapse
                            className="collapse"
                            accordion={false}>
                            { choices.length >= 0 &&
                                ( choices.map((j, j_index) => (
                                    <Panel key={j_index}
                                        className="panel"
                                        header={"Choice " + (j_index+1)}>
                                        { j.editMode ?
                                            ( <textarea
                                                className="choice-input"
                                                onKeyPress={(e) => handleEndEditMode(e, index, j.id)}
                                                onChange={(e) => handleChoiceChange(e, index, j_index)}
                                                placeholder="Enter a description for this choice"
                                                value={j.description} /> )
                                        : <div className="choice-description"
                                            onClick={() => handleEditMode(index, j_index)}>
                                            <span className="choice-description-editable">
                                                Description: </span>{j.description}
                                        </div> }
                                        <input type="button"
                                            className="choice-button choice-button-remove"
                                            onClick={() => removeChoice(index, j_index)}
                                            value="DELETE CHOICE&mdash;" />
                                    </Panel> ))
                            )}
                        </Collapse>
                    </section>
                );
            }
        })()}
    </section>
);

Decision.propTypes = {
    choices: PropTypes.array.isRequired,
};

export default Decision;
