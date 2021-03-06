import React from 'react'
import {addInitiation} from '../actions/initiationActions'
import {connect} from 'react-redux'
import NavBar from './NavBar'

class InitiationTrackerForm extends React.Component {
    handleSubmit =(event) => {
        event.preventDefault()
        this.props.addInitiation({...this.state})
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
                <div className="initiation-form-holder">
                <form className="initiation-form" onSubmit={event => this.handleSubmit(event)}>
                    <input className="input-1" type="text" name="characterName" placeholder="Enter Character/NPC Name" onChange={event => this.handleOnChange(event)} value={this.props.characterName}/>
                    <input className="submit-initiation" type="submit" value="Submit Initiation" />
                </form>
                </div>
            </div>
        )
    }
}


export default connect(null, {addInitiation}) (InitiationTrackerForm)