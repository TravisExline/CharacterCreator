import React from 'react'
import { connect } from 'react-redux'
import { createUser } from '../actions/userActions'
import '../style/SignIn.css'

class SignInForm extends React.Component {
    state = {
        username: "",
        password: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.createUser({
            ...this.state,
        })
        this.setState({
            username: "",
            password: ""
        })
    }

    handleVisibility = () => {
        var pw = document.getElementById("pwInput")
        if (pw.type ==="password") {
            pw.type = "text"
        } else {
            pw.type = "password"
        }
    }

    render() {
        return (
            <div className="container">
                <h2 className="header">Begin Your Adventure Below</h2>
                <div className="sign-in-background">
                <form className="sign-in-form" onSubmit={this.handleSubmit}>
                    <input className="input-username" type="text" name="username" placeholder="Enter Your Username" onChange={this.handleChange} value={this.state.username}/>
                    <input className="input-password" type="password" name="password" placeholder="Enter Your Password" onChange={this.handleChange} value={this.state.password} id="pwInput"/>
                    <input className="checkbox-toggle" type="checkbox" onClick={this.handleVisibility}/><p className="toggle-text">Show Password</p>
                    <input className="submit-user" type="submit" value="Login" />
                </form>
                </div>
            </div>

        )
    }
}

export default connect(null, { createUser })(SignInForm)