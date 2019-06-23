// :nodoc
//-----------------------------------------------------------------------------
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { axios } from '../../configs';
import { ActionCableProvider, ActionCable } from 'react-actioncable-provider';

import ChatWrapper from './Wrapper';
import ChatMessage from './Message';

// :nodoc
//-----------------------------------------------------------------------------
export default class ChatLayout extends Component {

    // :nodoc
    //-------------------------------------------------------------------------
    static propTypes = {
        currentUser: PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
        }),
    };

    // :nodoc
    //-------------------------------------------------------------------------
    constructor(props) {
        super(props);

        this.state = {
            messages: [],
        };
    }

    // :nodoc
    //-------------------------------------------------------------------------
    componentDidMount() {
        const self = this;

        axios.get('/chat/messages.json').then(function (response) {
            self.setState({ messages: response.data.messages });
        }).catch(function (_error) {
            // TODO
        });
    }

    // :nodoc
    //-------------------------------------------------------------------------
    handleReceiveMessage(message, _event) {
        this.setState({messages: [message, ...this.state.messages]});
    }

    // :nodoc
    //-------------------------------------------------------------------------
    renderMessages() {
        const self = this;

        return this.state.messages.map(function (message, index) {
            return <ChatMessage key={index}
                                userId={message.userId}
                                userName={message.userName}
                                createdAt={message.createdAt}
                                content={message.content}
                                currentUser={self.props.currentUser}/>
        });
    }

    // :nodoc
    //-------------------------------------------------------------------------
    render() {
        return (
            <ActionCableProvider url={'ws://localhost:3000/web_socket'}>
                <ChatWrapper currentUser={this.props.currentUser}>
                    <ActionCable channel={'ChatChannel'}
                                 onReceived={this.handleReceiveMessage.bind(this)}>
                        {this.renderMessages()}
                    </ActionCable>
                </ChatWrapper>
            </ActionCableProvider>
        )
    }

}