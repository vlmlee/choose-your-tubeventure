import React, { PropTypes } from 'react';
import Collapse, { Panel } from 'rc-collapse';

const Ending = ({
    index,
    id,
    name,
    startTime,
    pauseTime,
    editMode,
    choices,
    removeChoice,
    addStartAndPauseTime,
    handlePropChange,
    handleChoiceChange,
    handleEditMode,
    handleEndEditMode
}) => (
    <section className="decision">
        <section>
            <section className="decision-description">
                { editMode === id ?
                    ( <span><input type="text"
                            className="choice-description-input choice-name"
                            onKeyPress={(e) => handleEndEditMode(e, 'endings', index)}
                            onChange={(e) => handlePropChange(e, 'endings', 'name', index)}
                            placeholder="Ending title" />
                        <input type="text"
                            className="choice-description-input choice-pause"
                            onKeyPress={(e) => handleEndEditMode(e, 'endings', index)}
                            onChange={(e) => addStartAndPauseTime(e, 'endings', index)}
                            placeholder="Enter the start and end times [MM:SS, MM:SS]" />
                        </span> )
                : <section onClick={() => handleEditMode('endings', index)}>
                    <span className="breakpoint-type">(Ending {(index + 1)}) - { name } : [{startTime}, {pauseTime}]</span>
                    { pauseTime !== '' || <span> &#8594; Set a start and end time - [start time, end time] </span> }
                </section> }
            </section>
            <Collapse
                className="collapse"
                accordion={false}>
                { choices.length >= 0 &&
                    ( choices.map((j, j_index) => (
                        <Panel key={j_index}
                            className="panel"
                            header={"Ending"}>
                            { j.editMode === j.id ?
                                ( <section className="choice-editable-box">
                                    <input type="text"
                                        className="choice-input"
                                        onKeyPress={(e) => handleEndEditMode(e, 'endings', index, j.id)}
                                        onChange={(e) => handleChoiceChange(e, index, j_index, 'endings', 'description')}
                                        placeholder="Enter a description for this ending"
                                        value={j.description} />
                                    <input type="text"
                                        className="choice-input"
                                        onKeyPress={(e) => handleEndEditMode(e, 'endings', index, j.id)}
                                        onChange={(e) => handleChoiceChange(e, index, j_index, 'endings', 'nextPauseTime')}
                                        placeholder="Enter the ending time"
                                        value={j.nextPauseTime} />
                                </section> )
                            : ( <section className="choice-box choice-box-ending"
                                    onClick={() => handleEditMode('endings', index, j_index)}>
                                    <div className="choice-description-ending">
                                        <p>
                                            <span className="choice-editable">Description: </span>{j.description}
                                        </p>
                                    </div>
                                    <div className="choice-next-pausetime">
                                        <p>
                                            <span className="choice-editable">Ending time: </span>{j.nextPauseTime}
                                        </p>
                                    </div>
                                </section> ) }
                            { j.editMode === j.id ?
                                ( <input type="button"
                                        className="choice-button choice-button-edit"
                                        onClick={() => handleEditMode('endings', index, j_index, true)}
                                        value="SAVE" /> )
                            : ( <input type="button"
                                    className="choice-button choice-button-edit"
                                    onClick={() => handleEditMode('endings', index, j_index)}
                                    value="EDIT ENDING" /> ) }
                            <input type="button"
                                className="choice-button choice-button-remove"
                                onClick={() => removeChoice('endings', index, j_index)}
                                value="DELETE ENDING&mdash;" />
                        </Panel> ))
                )}
            </Collapse>
        </section>
    </section>
);

Ending.propTypes = {
    index: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    choices: PropTypes.array.isRequired,
    removeChoice: PropTypes.func.isRequired,
    addStartAndPauseTime: PropTypes.func.isRequired,
    handleChoiceChange: PropTypes.func.isRequired,
    handleEditMode: PropTypes.func.isRequired,
    handleEndEditMode: PropTypes.func.isRequired,
};

export default Ending;
