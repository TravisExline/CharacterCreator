import React from 'react'
import NavBar from './NavBar'
import {connect} from 'react-redux'
import {fetchCharacters} from '../actions/characterActions'
import CharacterCard from '../components/CharacterCard'
import '../style/User.css'

class User extends React.Component {

    componentDidMount() {
        this.props.fetchCharacters()
    }

    render() {
        return (
            <div>
                <h2 className="header">Welcome, {this.props.username}</h2>
                <NavBar />
                {/* {this.props.characters.map((character) => (
                    <CharacterCard key={character.id} character={character} userId={this.props.user.id} handleDestroy={this.props.destroyCharacter}/>
                ))} */}
            </div>
            
        )
    }
}

// const myRandomChar = this.props.characters(Math.floor(Math.random() * characters.length))

const mapStateToProps = (state) => {
    return {characters: state.charactersReducer, user: state.usersReducer}
}

export default connect(mapStateToProps, {fetchCharacters})(User)
