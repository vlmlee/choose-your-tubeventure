import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super(props);
        this.state = {
            searchTerm: '',
            results: '',
        };
    }

    handleSearchAdventure(e) {
        if (e.key === 'ENTER') {
            fetch(`http://localhost:9001/search/${this.state.searchTerm}`)
                .then(response => {
                    this.setState({
                        searchTerm: '',
                        results: response.content
                    });
                })
                .catch(err => {
                    throw new Error(err.message);
                });
        } else {
            this.setState({ searchTerm: e.target.value });
        }
    }

    render() {
        return (
            <section className="App">
                <Link to="/create">Create an adventure</Link>

                <input
                    type="text"
                    onKeyPress={this.handleSearchAdventure}
                    placeholder="Search for an adventure"
                    value={this.state.searchTerm} />

                { this.state.results ? (
                    <h1>Search Results</h1>
                    <section className="search-results">
                        this.state.results.map(i => (
                            <Link key={i._id}
                                to={"/view/" + i._id}>
                                {i.name}
                            </Link>
                        ))
                    </section>
                ) : '' }
            </section>
        );
    }
}

export default App;
