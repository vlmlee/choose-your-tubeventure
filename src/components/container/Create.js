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
            confirmSecret: '',
            youtubeId: '',
            decisions: [],
            endings: [],
            editMode: false,
        };

        this.handleUserInfo = this.handleUserInfo.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.addStart = this.addStart.bind(this);
        this.addDecision = this.addDecision.bind(this);
        this.removeDecision = this.removeDecision.bind(this);
        this.addEnding = this.addEnding.bind(this);
        this.removeEnding = this.removeEnding.bind(this);
        this.createAdventure = this.createAdventure.bind(this);

        this.createBreakpoint= this.createBreakpoint.bind(this);
        this.createEnding = this.createEnding.bind(this);

        this.playtest = this.playtest.bind(this);
        this.autosave = this.autosave.bind(this);
        this.throttleAutosave = this.throttleAutosave.bind(this);
    }

    componentDidMount() {
        this.setState({ youtubeId: this.props.params.id });
    }

    handleUserInfo() {

    }

    handleNameChange() {

    }

    addStart() {

    }

    addDecision() {

    }

    removeDecision() {

    }

    addEnding() {

    }

    removeEnding() {

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
            name: 'name',
            choices: [{
                heading: 'header'
            }],
        });
        this.setState({
            decisions,
        });
    }

    createEnding() {
        const endings = this.state.endings;
        endings.push({
            name: 'name',
            choices: [{
                heading: 'ending',
                description: 'Nothing here'
            }],
        });
        this.setState({
            endings,
        });
    }

    addChoice(index) {
        const decisions = this.state.decisions;
        decisions[index].choices.push({
            heading: 'new'
        });
        this.setState({
            decisions,
        });
    }

    removeChoice(index, j_index) {
        const decisions = this.state.decisions;
        decisions[index].choices.splice(j_index, 1);
        this.setState({
            decisions,
        });

        if (decisions[index].choices.length === 0) {
            decisions.splice(index, 1);
            this.setState({
                decisions,
            });
        }
    }

    handleChoiceChange(e, index, j_index) {
        const decisions = this.state.decisions;
        decisions[index].choices[j_index].description = e.target.value;
        this.setState({
            decisions,
        });
    }

    handleEditMode() {
        this.setState({
            editMode: true
        });
    }

    handleEndEditMode(e) {
        if (e.key === 'Enter') {
            this.setState({
                editMode: false
            });
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
                <Header text="CREATE STORYBOARD" />

                <AdventureForm createAdventure={this.createAdventure}
                    handleNameChange={this.handleNameChange}
                    createBreakpoint={this.createBreakpoint}
                    createEnding={this.createEnding}
                    youtubeId={this.props.params.id} />

                <section className="decisions-section">
                    { this.state.decisions.length > 0 &&
                        ( this.state.decisions.map((i, index) => (
                            <Decision key={index}
                                index={index}
                                choices={i.choices}
                                editMode={this.state.editMode}
                                addChoice={this.addChoice.bind(this)}
                                removeChoice={this.removeChoice.bind(this)}
                                handleChoiceChange={this.handleChoiceChange.bind(this)}
                                handleEditMode={this.handleEditMode.bind(this)}
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
