// :nodoc
//-----------------------------------------------------------------------------
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// :nodoc
//-----------------------------------------------------------------------------
class Message extends Component {

    // :nodoc
    //-------------------------------------------------------------------------
    static propTypes = {
        userId: PropTypes.number,
        userName: PropTypes.string,
        createdAt: PropTypes.string,
        content: PropTypes.string,
        currentUser: PropTypes.object,
    };

    // :nodoc
    //-------------------------------------------------------------------------
    isMyMessage() {
        return this.props.userId === this.props.currentUser.id;
    }

    // :nodoc
    //-------------------------------------------------------------------------
    render () {
        return (
            <div className={classNames({
                     'direct-chat-msg': true,
                     'right': !this.isMyMessage()
                 })}>
                <div className="direct-chat-info clearfix">
                    <span className="direct-chat-name pull-left">
                        {this.props.userName}
                    </span>
                    <span className="direct-chat-timestamp pull-right">
                        {this.props.createdAt}
                    </span>
                </div>
                {/*<img className="direct-chat-img"
                        src="dist/img/user1-128x128.jpg"
                        alt="message user image"/>*/}
                <div className="direct-chat-text">
                    {this.props.content}
                </div>
            </div>
        )
    }

}

// :nodoc
//-------------------------------------------------------------------------
export default Message;