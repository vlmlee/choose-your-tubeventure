import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Boron from 'boron';

export default class LinkModal extends Component {
    constructor(props) {
        super(props);

        this.styles = {
            btn: {
                display: 'none',
            },
            container: {
                padding: '0em',
                textAlign: 'center'
            },
            title: {
                margin: 0,
                color: '#C94E50',
                fontWeight: 400,
                fontSize: '20px',
            },
            modal: {
                padding: '100px',
                borderRadius: '5px',
                border: '10px solid cornflowerblue',
            },
        };

        this.getContent = this.getContent.bind(this);
        this.getModal = this.getModal.bind(this);
    }

    componentDidUpdate(nextProps, nextState) {
        if (this.props.modal !== nextProps.modal) {
            this.eventFire(this.refs['modal-button'], 'click');
        }
    }

    toggleDialog(ref) {
        return function() { this.refs[ref].toggle(); }.bind(this);
    }

    getContent(modalName){
        return (
            <div style={this.styles.container}>
                <h2 style={this.styles.title}><Link className="modal-link" to={`/view/${this.props.id}`}>Play Test</Link></h2>
            </div>
        );
    }

    getModal(modalName) {
        const Modal = Boron['DropModal'];
        return (
            <div>
                <button ref="modal-button" style={this.styles.btn} onClick={this.toggleDialog(modalName)}>Open {modalName}</button>
                <Modal modalStyle={this.styles.modal} ref={modalName}>{this.getContent(modalName)}</Modal>
            </div>
        );
    }

    eventFire(el, etype){
        if (el.fireEvent) {
            el.fireEvent('on' + etype);
        } else {
            var evObj = document.createEvent('Events');
            evObj.initEvent(etype, true, false);
            el.dispatchEvent(evObj);
        }
    }

    render() {
        return (
            <div style={this.styles.container}>
                {(() => this.getModal('DropModal'))() }
            </div>
        );
    }
}

LinkModal.propTypes = {
    id: PropTypes.string.isRequired,
    modal: PropTypes.string.isRequired,
};
