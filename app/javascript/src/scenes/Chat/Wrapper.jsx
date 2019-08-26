// :nodoc
//-----------------------------------------------------------------------------
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ChatForm from './Form';

// :nodoc
//-----------------------------------------------------------------------------
class Wrapper extends Component {

    // :nodoc
    //-------------------------------------------------------------------------
    static propTypes = {
        currentUser: PropTypes.object,
    };

    // :nodoc
    //-------------------------------------------------------------------------
    render() {
        return (
            <div className={'box box-primary direct-chat direct-chat-primary'}>
                <div className={'box-header with-border'}>
                    <h3 className={'box-title'}>Chat Room</h3>
                </div>
                <div className={'box-body'}>
                    <div className={'direct-chat-messages'}>
                        {this.props.children}
                    </div>
                </div>
                <div className={'box-footer'}>
                    <ChatForm currentUser={this.props.currentUser}/>
                </div>
            </div>
        )
    }

}

// :nodoc
//-----------------------------------------------------------------------------
export default Wrapper;