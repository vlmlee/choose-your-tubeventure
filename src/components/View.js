import React, { Component } from 'react';
import { Link } from 'react-router';

export default class View extends Component {
	render() {
		return (
			<div>
				View {this.props.params.id}
				<Link to={`/edit/${this.props.params.id}`}> 
					{this.props.params.id} 
				</Link>
			</div>
		);
	}
}