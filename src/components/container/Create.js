import React, { Component } from 'react';
import Header from '../presentational/Header.js';
import AdventureForm from '../presentational/AdventureForm.js';
import Decision from '../presentational/Decision.js';
import Ending from '../presentational/Ending.js';
import _ from 'underscore';
import 'rc-collapse/assets/index.css';

export default class Create extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            creator: '',
            description: '',
            secret: '',
            youtubeId: '',
            decisions: [],
            endings: [],
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleCreatorChange = this.handleCreatorChange.bind(this);
        this.handleDescChange = this.handleDescChange.bind(this);
        this.handleSecretChange = this.handleSecretChange.bind(this);
        this.createAdventure = this.createAdventure.bind(this);

        this.createBreakpoint= this.createBreakpoint.bind(this);
        this.createEnding = this.createEnding.bind(this);
        this.handleEditMode = this.handleEditMode.bind(this);

        this.playtest = this.playtest.bind(this);
        this.autosave = this.autosave.bind(this);
        this.throttleAutosave = this.throttleAutosave.bind(this);
    }

    componentDidMount() {
        this.setState({ youtubeId: this.props.params.id });
    }

    // Can change these to generics
    handleChange(e, stateProp) {
        this.setState({ [stateProp]: e.target.value });
    }

    handleNameChange(e) {
        this.setState({ name: e.target.value });
    }

    handleCreatorChange(e) {
        this.setState({ creator: e.target.value });
    }

    handleDescChange(e) {
        this.setState({ description: e.target.value });
    }

    handleSecretChange(e) {
        this.setState({ secret: e.target.value });
    }

    createAdventure(e) {
        e.preventDefault();
        if (this.state.name && this.state.author && this.state.description && this.state.youtubeId) {
            const opts = {
                method: 'POST',
                body: JSON.stringify({ }),
                headers: { "Content-Type": "application/json",
                    "Accept": "application/json" }
            };
            fetch('http://localhost:9001/adventure/' + this.props.params.id, opts);
        }
    }

    createBreakpoint() {
        const decisions = this.state.decisions;
        decisions.push({
            id: _.uniqueId(),
            name: '',
            startTime: '',
            pauseTime: '',
            choices: [{
                id: _.uniqueId(),
                description: '<- Click here to change',
                editMode: false,
                goto: '',
                nextPauseTime: '',
            }],
            editMode: false,
        });
        this.setState({ decisions, });
    }

    createEnding() {
        const endings = this.state.endings;
        endings.push({
            id: _.uniqueId(),
            name: '',
            startTime: '',
            pauseTime: '',
            choices: [{
                id: _.uniqueId,
                heading: 'Ending',
                description: '<- Click here to change',
                editMode: false,
                goto: '',
                endTime: '',
            }],
            editMode: false,
        });
        this.setState({ endings, });
    }

    handleBpNameChange(e, index) {
        const decisions = this.state.decisions;
        decisions[index].name = e.target.value;
    }

    addPauseTime(e, index) {
        const decisions = this.state.decisions;
        if (~e.target.value.split('').indexOf(':')) {
            const time = e.target.value.split(':');
            const timeInSeconds = parseInt(time[0], 10)*60 + parseInt(time[1], 10);
            decisions[index].pauseTime = timeInSeconds;
        } else {
            decisions[index].pauseTime = e.target.value;
        }
    }

    addStartAndPauseTime(e, index) {
        const decisions = this.state.decisions;
        if (~e.target.value.split('').indexOf(':')) {
            const time = e.target.value.split(/[\[,\]]/).filter(i => i !== '').map(i => i.split(':'));
            decisions[index].startTime = parseInt(time[0][0], 10)*60 + parseInt(time[0][1], 10);
            decisions[index].pauseTime = parseInt(time[1][0], 10) *60 + parseInt(time[1][1], 10);
        } else {
            const time = e.target.value.split(/[\[,\]]/).filter(i => i !== '');
            decisions[index].startTime = parseInt(time[0], 10);
            decisions[index].pauseTime = parseInt(time[1], 10);
        }
    }

    addChoice(index) {
        const decisions = this.state.decisions;
        decisions[index].choices.push({
            id: _.uniqueId,
            description: '<- Click here to change',
            editMode: false,
        });
        this.setState({ decisions, });
    }

    removeChoice(index, j_index) {
        const decisions = this.state.decisions;
        decisions[index].choices.splice(j_index, 1);
        if (decisions[index].choices.length === 0) {
            decisions.splice(index, 1);
        }
        this.setState({ decisions, });
    }

    handleChoiceChange(e, index, j_index, stateProp) {
        const decisions = this.state.decisions;
        decisions[index].choices[j_index][stateProp] = e.target.value;
        this.setState({ decisions, });
    }

    handleEditMode(index, j_index) {
        const decisions = this.state.decisions;
        if (j_index === undefined) {
            decisions[index].editMode = decisions[index].id;
        } else {
            decisions[index].choices[j_index].editMode = decisions[index].choices[j_index].id;
        }
        this.setState({ decisions, });
    }

    handleEndEditMode(e, index, id) {
        if (e.key === 'Enter') {
            const decisions = this.state.decisions;
            if (!id) {
                decisions[index].editMode = false;
            } else {
                decisions[index].choices.find(i => i.id === id).editMode = false;
            }
            this.setState({ decisions, });
        }
    }

    playtest() {

    }

    autosave() {

    }

    throttleAutosave() {
        this.autosave = this.autosave || _.throttle(state => {
            // save state with fetch();
        }, 5000);
    }

    render() {
        return (
            <section>
                <Header text="STORYBOARD" />

                <AdventureForm
                    name={this.state.name}
                    creator={this.state.creator}
                    description={this.state.description}
                    youtubeId={this.props.params.id}
                    handleNameChange={this.handleNameChange}
                    handleCreatorChange={this.handleCreatorChange}
                    handleDescChange={this.handleDescChange}
                    handleSecretChange={this.handleSecretChange}
                    createAdventure={this.createAdventure}
                    createBreakpoint={this.createBreakpoint}
                    createEnding={this.createEnding} />

                <section className="decisions-section">
                    { this.state.decisions.length > 0 &&
                        ( this.state.decisions.map((i, index) => (
                            <Decision key={index}
                                index={index}
                                id={i.id}
                                name={i.name}
                                startTime={i.startTime}
                                pauseTime={i.pauseTime}
                                description={i.description}
                                editMode={i.editMode}
                                choices={i.choices}
                                addChoice={this.addChoice.bind(this)}
                                addPauseTime={this.addPauseTime.bind(this)}
                                addStartAndPauseTime={this.addStartAndPauseTime.bind(this)}
                                handleBpNameChange={this.handleBpNameChange.bind(this)}
                                removeChoice={this.removeChoice.bind(this)}
                                handleChoiceChange={this.handleChoiceChange.bind(this)}
                                handleEditMode={this.handleEditMode}
                                handleEndEditMode={this.handleEndEditMode.bind(this)} /> ))
                        )}

                    {this.state.endings.length > 0 &&
                        ( this.state.endings.map((i, index) => (
                            <Ending key={index}
                                index={index + 1}
                                choices={i.choices} />
                        )))}
                </section>
            </section>
        );
    }
}
