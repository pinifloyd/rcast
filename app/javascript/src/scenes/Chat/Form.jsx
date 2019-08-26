// :nodoc
//-----------------------------------------------------------------------------
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { axios } from '../../configs/axios';

// :nodoc
//-----------------------------------------------------------------------------
class Form extends Component {

    // :nodoc
    //-------------------------------------------------------------------------
    static propTypes = {
        currentUser: PropTypes.object,
    };

    // :nodoc
    //-------------------------------------------------------------------------
    constructor(props) {
        super(props);

        this.state = {
            message: '',
        };
    }

    // :nodoc
    //-------------------------------------------------------------------------
    handleTyping(event) {
        return this.setState({message: event.target.value});
    }

    // :nodoc
    //-------------------------------------------------------------------------
    handleSubmit(event) {
        event.preventDefault();

        const self = this;

        axios.post('/chat/messages.json', {
            message: {
                user_id: self.props.currentUser.id,
                content: self.state.message,
            }
        }).then(function (_response) {
            self.setState({message: ''});
        }).catch(function (_error) {
            // TODO
        });
    }

    // :nodoc
    //-------------------------------------------------------------------------
    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div className={'input-group input-group-sm'}>
                    <input type={'text'}
                           placeholder={'Type message...'}
                           className={'form-control'}
                           value={this.state.message}
                           onChange={this.handleTyping.bind(this)}/>
                    <span className={'input-group-btn'}>
                        <button type={'submit'}
                                className={'btn btn-primary btn-flat'}>
                            Send
                        </button>
                    </span>
                </div>
            </form>
        )
    }

}

// :nodoc
//-----------------------------------------------------------------------------
export default Form;