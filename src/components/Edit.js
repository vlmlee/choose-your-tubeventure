import React, { Component } from 'react';

export default class Edit extends Component {
	render() {
		return (
			<div>
				<p>Hello world.</p>
				<h1>{this.props.params.id}</h1>
			</div>
		);
	}
}