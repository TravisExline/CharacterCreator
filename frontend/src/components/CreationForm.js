import React from 'react'
import { connect } from 'react-redux'
import {createCharacter } from '../actions/characterActions'
import NavBar from './NavBar'
import Dice from '../containers/DiceContainer'
import '../style/CreationForm.css'

class CreationForm extends React.Component {
    componentDidMount() {
        this.setState({
            user_id: this.props.user.id
        })
    }
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.createCharacter({...this.state})
        this.setState({
            name: "",
            spec: "",
            race: "",
            age: "",
            str: "",
            dex: "",
            const: "",
            int: "",
            wis: "",
            char: "",
            details: ""
        })
    }
    render() {
        const props = this.props
        return (
            <div className="creation-container">
                <NavBar />
                <h2 className="creation-header">Create Your Character Below</h2>
                <form className="creation-form" onSubmit={event => this.handleSubmit(event)}>
                    <input className="name-input" type="text" name="name" placeholder="Enter Character Name" onChange={event => this.handleChange(event)} value={props.name}/>
                    <input className="class-input" type="text" name="spec" placeholder="Enter Character Class" onChange={event => this.handleChange(event)} value={props.spec}/>
                    <input className="race-input" type="text" name="race" placeholder="Enter Character Race" onChange={event => this.handleChange(event)} value={props.race}/>
                    <input className="age-input" type="text" name="age" placeholder="Enter Character Age" onChange={event => this.handleChange(event)} value={props.age}/>
                    <input className="str-input" type="text" name="str" placeholder="Enter Character Strength" onChange={event => this.handleChange(event)} value={props.str}/>
                    <input className="dex-input" type="text" name="dex" placeholder="Enter Character Dexterity" onChange={event => this.handleChange(event)} value={props.dex}/>
                    <input className="const-input" type="text" name="const" placeholder="Enter Character Constitution" onChange={event => this.handleChange(event)} value={props.const}/>
                    <input className="int-input" type="text" name="int" placeholder="Enter Character Intellect" onChange={event => this.handleChange(event)} value={props.int}/>
                    <input className="wis-input" type="text" name="wis" placeholder="Enter Character Wisdom" onChange={event => this.handleChange(event)} value={props.wis}/>
                    <input className="char-input" type="text" name="char" placeholder="Enter Character Charisma" onChange={event => this.handleChange(event)} value={props.char}/>
                    <input className="lvl-input" type="text" name="details" placeholder="Enter Character Level" onChange={event => this.handleChange(event)} value={props.details}/>
                    <input className="submit-character" type="submit" value="Create Character" />
                </form>
                <Dice />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {user: state.usersReducer}
}

export default connect(mapStateToProps, {createCharacter})(CreationForm)