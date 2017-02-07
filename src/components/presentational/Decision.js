import React, { PropTypes } from 'react';
import Collapse, { Panel } from 'rc-collapse';

const Decision = ({
    index,
    id,
    name,
    startTime,
    pauseTime,
    editMode,
    choices,
    addChoice,
    removeChoice,
    addPauseTime,
    addStartAndPauseTime,
    handleChoiceChange,
    handlePropChange,
    handlePauseTimeChange,
    handleEditMode,
    handleEndEditMode
}) => (
    <section className="decision">
        <section>
            <section className="decision-description">
                { editMode === id ?
                    ( <span><input type="text"
                            className="choice-description-input choice-name"
                            onKeyPress={(e) => handleEndEditMode(e, 'decisions', index)}
                            onChange={(e) => handlePropChange(e, 'decisions', 'name', index)}
                            placeholder="Breakpoint title" />
                        <input type="text"
                            className="choice-description-input choice-pause"
                            onKeyPress={(e) => handleEndEditMode(e, 'decisions', index)}
                            onChange={(index ? (e) => addStartAndPauseTime(e, 'decisions', index) : (e) => addPauseTime(e, 'decisions', index))}
                            placeholder={ index ? "Enter the start and pause times [MM:SS, MM:SS]" : "Enter the pause time (MM:SS or seconds)" } />
                        </span> )
                : <section onClick={() => handleEditMode('decisions', index)}>
                    <span className="breakpoint-type">{ index ? '(Decision) -' : '(Start) -' } { name } : [{index ? startTime : 0 }, {pauseTime}]</span>
                    { pauseTime !== '' || <span> &#8592; Click here to set a { index ? 'start and' : '' } pause time - [start time, pause time] </span> }
                </section> }
            </section>
            <input type="button"
                className="choice-button"
                onClick={() => addChoice('decisions', index)}
                value="ADD CHOICE+" />
            <Collapse
                className="collapse"
                accordion={false}>
                { choices.length >= 0 &&
                    ( choices.map((j, j_index) => (
                        <Panel key={j_index}
                            className="panel"
                            header={"Choice " + (j_index+1)}>
                            { j.editMode === j.id ?
                                ( <section className="choice-editable-box">
                                    <input type="text"
                                        className="choice-input"
                                        onKeyPress={(e) => handleEndEditMode(e, 'decisions', index, j.id)}
                                        onChange={(e) => handleChoiceChange(e, index, j_index, 'decisions', 'description')}
                                        placeholder="Enter a description for this choice"
                                        value={j.description} />
                                    <input type="text"
                                        className="choice-input"
                                        onKeyPress={(e) => handleEndEditMode(e, 'decisions', index, j.id)}
                                        onChange={(e) => handleChoiceChange(e, index, j_index, 'decisions', 'goto')}
                                        placeholder="Enter a time to go to"
                                        value={j.goto} />
                                    <input type="text"
                                        className="choice-input"
                                        onKeyPress={(e) => handleEndEditMode(e, 'decisions', index, j.id)}
                                        onChange={(e) => handleChoiceChange(e, index, j_index, 'decisions', 'nextPauseTime')}
                                        placeholder="Enter the next pause time"
                                        value={j.nextPauseTime} />
                                </section> )
                            : ( <section className="choice-box"
                                    onClick={() => handleEditMode('decisions', index, j_index)}>
                                    <div className="choice-description">
                                        <p>
                                            <span className="choice-editable">Description: </span>{j.description}
                                        </p>
                                    </div>
                                    <div className="choice-goto">
                                        <p>
                                            <span className="choice-editable">Go to: </span>{j.goto}
                                        </p>
                                    </div>
                                    <div className="choice-next-pausetime">
                                        <p>
                                            <span className="choice-editable">Next pause time: </span>{j.nextPauseTime}
                                        </p>
                                    </div>
                                </section> ) }
                            { j.editMode === j.id ?
                                ( <input type="button"
                                        className="choice-button choice-button-edit"
                                        onClick={() => handleEditMode('decisions', index, j_index, true)}
                                        value="SAVE" /> )
                            : ( <input type="button"
                                    className="choice-button choice-button-edit"
                                    onClick={() => handleEditMode('decisions', index, j_index)}
                                    value="EDIT CHOICE" /> ) }
                            <input type="button"
                                className="choice-button choice-button-remove"
                                onClick={() => removeChoice('decisions', index, j_index)}
                                value="DELETE CHOICE&mdash;" />
                        </Panel> ))
                )}
            </Collapse>
        </section>
    </section>
);

Decision.propTypes = {
    index: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    choices: PropTypes.array.isRequired,
    addChoice: PropTypes.func.isRequired,
    removeChoice: PropTypes.func.isRequired,
    addPauseTime: PropTypes.func.isRequired,
    addStartAndPauseTime: PropTypes.func.isRequired,
    handleChoiceChange: PropTypes.func.isRequired,
    handleEditMode: PropTypes.func.isRequired,
    handleEndEditMode: PropTypes.func.isRequired,
};

export default Decision;
