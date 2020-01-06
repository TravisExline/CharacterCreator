import React from 'react'
import {addInitiation} from '../actions/initiationActions'
import {connect} from 'react-redux'
import NavBar from './NavBar'

class InitiationTrackerForm extends React.Component {
    handleSubmit =(event) => {
        event.preventDefault()
        this.props.addInitiation({...this.state})
        this.setState({
            characterName: "",
        })
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    render() {
        return (
            <div>
                <NavBar />
                <h2 className="initiation-header">Initiation Tracker</h2>
                <form className="initiation-form" onSubmit={event => this.handleSubmit(event)}>
                    <input className="input-1" type="text" name="initiation-input" placeholder="Enter Character/NPC Name" onChange={event => this.handleOnChange(event)} value={this.props.characterName}/>
                    <input className="submit-initiation" type="submit" value="Submit Initiation" />
                </form>
            </div>
        )
    }
}


export default connect(null, {addInitiation}) (InitiationTrackerForm)