import React, { PropTypes, Component } from 'react';

export default class View extends Component {
	render() {
		return (
			<div>
				View {this.props.params.id}
			</div>
		);
	}
}

View.propTypes = {
	params: PropTypes.obj.isRequired,
};