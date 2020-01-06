import React from 'react'
import User from './User'
import {connect} from 'react-redux'

class UserContainer extends React.Component {
    render() {
        return (
            <div>
                <User username={this.props.user.username}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {user: state.usersReducer}
}

export default connect(mapStateToProps)(UserContainer)
