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

    handleMagicWord(e) {
        this.setState({ secret: e.target.value });
    }

    tryMagicWord(e) {
        if (this.state.secret && e.key === 'ENTER') {
            try {
                fetch('http://localhost:9001/secret').then(response => {
                    if (response.allowed) {
                        this.setState({ allowed: true, error: '' });
                    }
                    this.setState({ error: 'Looks like you have the wrong password! '});
                });
            } catch (err) {
                this.setState({ error: err.message });
            }
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
                        className="magicWord"
                        onKeyPress={this.tryMagicWord}
                        onChange={this.handleMagicWord} />
                )}
            </div>
        );
    }
}