import React, { Component } from 'react';
import { Link } from 'react-router';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            results: '',
            error: '',
        };
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleSearchAdventure = this.handleSearchAdventure.bind(this);
    }

    handleSearchChange(e) {
        this.setState({ searchTerm: e.target.value });
    }

    handleSearchAdventure(e) {
        if (e.key === 'Enter') {
            console.log('hi');
            fetch(`http://localhost:9001/search/${this.state.searchTerm}`)
                .then(response => {
                    return response.json();
                })
                .then(responseJSON => {
                    this.setState({
                        searchTerm: '',
                        results: responseJSON.content,
                        error: '',
                    });
                })
                .catch(err => {
                    this.setState({ error: err.message });
                });
        }
    }

    render() {
        return (
            <section className="App">
                <Link to="/create">Create an adventure</Link>

                <input
                    type="text"
                    className="search-input"
                    onChange={this.handleSearchChange}
                    onKeyPress={this.handleSearchAdventure}
                    placeholder="Search for an adventure"
                    value={this.state.searchTerm} />

                <h1>Search Results</h1>
                { this.state.results ? (
                    <section className="search-results">
                        { this.state.results.map(i => (
                            <Link key={i._id}
                                className="search-link"
                                to={"/view/" + i._id}>
                                {i.name}
                            </Link>
                        )) }
                    </section>
                ) : '' }
            </section>
        );
    }
}

export default App;
