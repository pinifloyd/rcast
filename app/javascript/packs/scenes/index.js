// :nodoc
//-----------------------------------------------------------------------------
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import UserLayout from './User';
import ChatLayout from './Chat';

// :nodoc
//-----------------------------------------------------------------------------
class Application extends Component {

    // :nodoc
    //-------------------------------------------------------------------------
    constructor(props) {
        super(props);

        this.state = {
            currentUser: undefined,
        };
    }

    // :nodoc
    //-------------------------------------------------------------------------
    handleSelectUser(user) {
        this.setState({currentUser: user});
    }

    // :nodoc
    //-------------------------------------------------------------------------
    renderUserLayout() {
        if (this.state.currentUser) {
            return false
        } else {
            return <UserLayout onSelectUser={this.handleSelectUser.bind(this)}/>
        }
    }

    // :nodoc
    //-------------------------------------------------------------------------
    renderChatLayout() {
        if (this.state.currentUser) {
            return <ChatLayout currentUser={this.state.currentUser}/>
        } else {
            return false
        }
    }

    // :nodoc
    //-------------------------------------------------------------------------
    render() {
        return (
            <div className={'row'}>
                <div className={'col-md-4'}>
                    {this.renderUserLayout()}
                    {this.renderChatLayout()}
                </div>
            </div>
        )
    }

}

// :nodoc
//-----------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
    let container = document.getElementById('rjs-chat');
    if (!container) { return false }

    ReactDOM.render(<Application/>, container);
});