// :nodoc
//-----------------------------------------------------------------------------
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { axios } from '../../configs/axios';

import UserWrapper from './Wrapper';

// :nodoc
//-----------------------------------------------------------------------------
class UserLayout extends Component {

    // :nodoc
    //-------------------------------------------------------------------------
    static propTypes = {
        onSelectUser: PropTypes.func,
    };

    // :nodoc
    //-------------------------------------------------------------------------
    constructor(props) {
        super(props);

        this.state = {
            users: [],
        }
    }

    // :nodoc
    //-------------------------------------------------------------------------
    componentDidMount() {
        const self = this;

        axios.get('/chat/users.json')
             .then(function (response) {
                 self.setState({users: response.data.users})
             }).catch(function (_error) {
                 // TODO
             });
    }

    // :nodoc
    //-------------------------------------------------------------------------
    handleSelectUser(user, event) {
        event.preventDefault();
        this.props.onSelectUser(user);
    }

    // :nodoc
    //-------------------------------------------------------------------------
    renderUsers() {
        const self = this;

        return this.state.users.map(function (user) {
            return (
                <li key={user.id}>
                    <a href={'#'}
                       onClick={self.handleSelectUser.bind(self, user)}>
                        <i className={'fa fa-circle-o'}/>
                        {user.name}
                    </a>
                </li>
            )
        });
    }

    // :nodoc
    //-------------------------------------------------------------------------
    render() {
        return (
            <UserWrapper>
                <ul className={'nav nav-pills nav-stacked'}>
                    {this.renderUsers()}
                </ul>
            </UserWrapper>
        )
    }

}

// :nodoc
//-----------------------------------------------------------------------------
export default UserLayout;