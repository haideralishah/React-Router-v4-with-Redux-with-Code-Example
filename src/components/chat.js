import React, { Component } from 'react';

import { connect } from 'react-redux';


class Chat extends Component {

    render(){
        console.log(this.props.currentUser);
        return(
            <h1>Hello Chat</h1>
        )
    }
}

function mapStateToProp(state) {
    return ({
        currentUser: state.root.currentUser
    })
}
function mapDispatchToProp(dispatch) {
    return ({
        // changeUserName: ()=>{dispatch(changeUserName())}
       
    })
}

export default connect(mapStateToProp, mapDispatchToProp)(Chat);