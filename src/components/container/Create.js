import React, { Component } from 'react';
import Header from '../presentational/Header.js';
import AdventureForm from '../presentational/AdventureForm.js';
import Decision from '../presentational/Decision.js';
import Ending from '../presentational/Ending.js';
import _ from 'lodash';
import 'rc-collapse/assets/index.css';

export default class Create extends Component {
    constructor() {
        super();
        this.state = {
            _id: '',
            name: '',
            creator: '',
            secret: '',
            description: '',
            youtubeId: '',
            decisions: [],
            endings: [],
        };

        this.handleUserInfoChange = this.handleUserInfoChange.bind(this);
        this.handleEditMode = this.handleEditMode.bind(this);
        this.autosave = this.autosave.bind(this);
        this.generateRandomId = this.generateRandomId.bind(this);
        this.playtest = this.playtest.bind(this);

        this.autosave();
    }

    componentDidMount() {
        if (this.props.pageId === 'create') {
            this.setState({
                youtubeId: this.props.params.routeParams.id,
                _id: this.generateRandomId()
            });
        } else if (this.props.pageId === 'edit') {
            fetch('http://localhost:9001/adventure/' + this.props.params.routeParams.id)
            .then(response => response.json())
            .then(responseJSON => {
                const editState = Object.assign({}, responseJSON);
                this.replaceState(
                    editState,
                );
            })
            .catch(err => console.log(err.message));
        }
    }

    handleUserInfoChange(e, stateProp) {
        this.setState({ [stateProp]: e.target.value });
    }

    createAdventure() {
        if (this.state.name && this.state.creator && this.state.description && this.state.youtubeId) {
            const payload = _.cloneDeep(this.state);
            const opts = {
                method: 'POST',
                body: JSON.stringify({ data: payload }),
                headers: { "Content-Type": "application/json",
                    "Accept": "application/json" }
            };
            fetch('http://localhost:9001/adventure/' + this.state._id, opts)
            .then(response => console.log(response))
            .catch(err => console.log(err));
        }
    }

    createBreakpoint(stateProp) {
        const stateProps = this.state[stateProp];
        stateProps.push({
            id: this.generateRandomId(),
            name: '',
            startTime: '',
            pauseTime: '',
            choices: [{
                id: this.generateRandomId(),
                description: '',
                editMode: false,
                goto: '',
                nextPauseTime: '',
            }],
            editMode: false,
        });
        this.setState({ [stateProp]: stateProps });
    }

    handlePropChange(e, stateProp, prop, index) {
        const stateProps = this.state[stateProp];
        stateProps[index][prop] = e.target.value;
    }

    addPauseTime(e, stateProp, index) {
        const stateProps = this.state[stateProp];
        if (~e.target.value.split('').indexOf(':')) {
            const time = e.target.value.split(':');
            const timeInSeconds = parseInt(time[0], 10)*60 + parseInt(time[1], 10);
            stateProps[index].pauseTime = timeInSeconds;
        } else {
            stateProps[index].pauseTime = e.target.value;
        }
    }

    addStartAndPauseTime(e, stateProp, index) {
        const stateProps = this.state[stateProp];
        if (~e.target.value.split('').indexOf(':')) {
            const time = e.target.value.split(/[\[,\]]/).filter(i => i !== '').map(i => i.split(':'));
            stateProps[index].startTime = parseInt(time[0][0], 10)*60 + parseInt(time[0][1], 10);
            stateProps[index].pauseTime = parseInt(time[1][0], 10)*60 + parseInt(time[1][1], 10);
        } else {
            const time = e.target.value.split(/[\[,\]]/).filter(i => i !== '');
            stateProps[index].startTime = parseInt(time[0], 10);
            stateProps[index].pauseTime = parseInt(time[1], 10);
        }
    }

    addChoice(stateProp, index) {
        const stateProps = this.state[stateProp];
        stateProps[index].choices.push({
            id: this.generateRandomId(),
            description: '',
            editMode: false,
            goto: '',
            nextPauseTime: '',
        });
        this.setState({ [stateProp]: stateProps });
    }

    removeChoice(stateProp, index, j_index) {
        const stateProps = this.state[stateProp];
        stateProps[index].choices.splice(j_index, 1);
        if (stateProps[index].choices.length === 0) {
            stateProps.splice(index, 1);
        }
        this.setState({ [stateProp]: stateProps });
    }

    handleChoiceChange(e, index, j_index, stateProp, prop) {
        const stateProps = this.state[stateProp];
        stateProps[index].choices[j_index][prop] = e.target.value;
        this.setState({ [stateProp]: stateProps });
    }

    handleEditMode(stateProp, index, j_index, flag) {
        const stateProps = this.state[stateProp];
        if (flag) {
            stateProps[index].choices[j_index].editMode = false;
            this.setState({ [stateProp]: stateProps });
            return;
        } else if (j_index === undefined) {
            stateProps[index].editMode = stateProps[index].id;
        } else {
            stateProps[index].choices[j_index].editMode = stateProps[index].choices[j_index].id;
        }
        this.setState({ [stateProp]: stateProps });
    }

    handleEndEditMode(e, stateProp, index, id, save) {
        if (save || e.key === 'Enter') {
            const stateProps = this.state[stateProp];
            if (!id) {
                stateProps[index].editMode = false;
            } else {
                stateProps[index].choices.find(i => i.id === id).editMode = false;
            }
            this.setState({ [stateProp]: stateProps });
        }
    }

    playtest() {

    }

    autosave() {
        const stateClone = _.cloneDeep(this.state);
        const self = this;
        setTimeout(() => {
            const unchanged = _.isEqual(stateClone, this.state);
            if (!unchanged) {
                self.createAdventure();
                self.autosave();
            } else {
                self.autosave();
            }
        }, 600000);
    }

    generateRandomId() {
        let randomId = '';
        for (let i = 0; i < 16; i++) {
            randomId += 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789'
                .charAt( Math.floor( Math.random() * (62) ));
        }
        return randomId;
    }

    render() {
        return (
            <section className="create-container">
                <Header text="STORYBOARD" />

                <AdventureForm
                    name={this.state.name}
                    creator={this.state.creator}
                    description={this.state.description}
                    youtubeId={this.state.youtubeId}
                    handleUserInfoChange={this.handleUserInfoChange}
                    createAdventure={this.createAdventure.bind(this)}
                    createBreakpoint={this.createBreakpoint.bind(this)} />

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
                                handlePropChange={this.handlePropChange.bind(this)}
                                removeChoice={this.removeChoice.bind(this)}
                                handleChoiceChange={this.handleChoiceChange.bind(this)}
                                handleEditMode={this.handleEditMode}
                                handleEndEditMode={this.handleEndEditMode.bind(this)} /> ))
                        )}

                    {this.state.endings.length > 0 &&
                        ( this.state.endings.map((i, index) => (
                            <Ending key={index}
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
                                handlePropChange={this.handlePropChange.bind(this)}
                                removeChoice={this.removeChoice.bind(this)}
                                handleChoiceChange={this.handleChoiceChange.bind(this)}
                                handleEditMode={this.handleEditMode}
                                handleEndEditMode={this.handleEndEditMode.bind(this)} /> ))
                        )}
                </section>
            </section>
        );
    }
}
