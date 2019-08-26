// :nodoc
//-----------------------------------------------------------------------------
import React, { Component } from 'react';

// :nodoc
//-----------------------------------------------------------------------------
class Wrapper extends Component {

    // :nodoc
    //-------------------------------------------------------------------------
    render() {
        return (
            <div className={'box box-primary'}>
                <div className={'box-header with-border'}>
                    <h3 className={'box-title'}>Select User</h3>
                </div>
                <div className={'box-body no-padding'}>
                    {this.props.children}
                </div>
            </div>
        )
    }

}

// :nodoc
//-----------------------------------------------------------------------------
export default Wrapper;