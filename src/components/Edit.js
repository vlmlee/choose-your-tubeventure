import React, { Component } from 'react';

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

    tryMagicWord(e) {
        if (this.state.secret && e.key === 'ENTER') {
            fetch(`http://localhost:9001/validate/${this.props.params.id}`).then(response => {
                if (response.allowed) {
                    this.setState({ secret: '', allowed: true, error: '' });

                    // TODO: also populate a form with current info
                } else {
                    this.setState({ error: 'Looks like you have the wrong password! '});
                }
            }).catch(err => {
                this.setState({ error: err.message });
            });
        } else {
            this.setState({ secret: e.target.value });
        }
    }

    render() {
        return (
            <div>
                <h1>{this.props.params.id}</h1>
                <p>What's the magic word?</p>
                { this.state.allowed ? <h1>Show</h1> : (
                    <input
                        type="password"
                        className="magic-word"
                        onKeyPress={this.tryMagicWord}
                        placeholder="" />
                )}
            </div>
        );
    }
}
