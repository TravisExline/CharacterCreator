import React from 'react'
import NavBar from '../components/NavBar'
import '../style/User.css'

class User extends React.Component {
    render() {
        return (
            <div>
                <h2 className="header">Welcome, {this.props.username}</h2>
                <NavBar />
            </div>
        )
    }
}

export default (User)
