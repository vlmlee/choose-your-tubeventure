import React, { Component } from 'react';
import AdventureInfo from '../presentational/AdventureInfo.js';
import EditQuestion from '../presentational/EditQuestion.js';

export default class Edit extends Component {
    constructor() {
        super();
        this.state = {
            secret: '',
            allowed: false,
            error: ''
        };

        this.handleMagicWord = this.handleMagicWord.bind(this);
        this.tryMagicWord = this.tryMagicWord.bind(this);
    }

    handleMagicWord(e) {
        this.setState({ secret: e.target.value });
    }

    tryMagicWord(e) {
        if (this.state.secret && e.key === 'Enter') {
            const opts = {
                method: 'POST',
                body: JSON.stringify({ "secret" : this.state.secret }),
                headers: { "Content-Type": "application/json",
                    "Accept": "application/json" }
            };

            fetch(`http://localhost:9001/validate/${this.props.params.id}`, opts)
                .then(response => {
                    return response.json();
                })
                .then(responseJSON => {
                    if (responseJSON.allowed) {
                        this.setState({ secret: '', allowed: true, error: '' });
                    } else {
                        this.setState({ error: 'Looks like you have the wrong password! '});
                    }
                })
                .catch(err => {
                    this.setState({ error: err.message });
                });
        } else {
            this.setState({ secret: e.target.value });
        }
    }

    render() {
        return (
            <section className="edit-section" >
                { this.state.allowed ? (
                    <AdventureInfo
                        name={this.state.name}
                        author={this.state.author} /> )
                : ( <EditQuestion handleMagicWord={this.handleMagicWord}
                        tryMagicWord={this.tryMagicWord} /> ) }
            </section>
        );
    }
}
