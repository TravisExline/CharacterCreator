import React from 'react'
import {connect} from 'react-redux'
import NavBar from './NavBar'
import '../style/Character.css'
import CharacterCard from './CharacterCard'
import {fetchCharacters, destroyCharacter} from '../actions/characterActions'

class Characters extends React.Component {
    componentDidMount() {
        this.props.fetchCharacters()
    }

    render() {
         return (
            <div>
                <NavBar />
                {this.props.characters.map((character) => <CharacterCard key={character.id} character={character} userId={this.props.user.id} handleDestroy={this.props.destroyCharacter}/>)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {characters: state.charactersReducer, user: state.usersReducer}
}

export default connect(mapStateToProps, {fetchCharacters, destroyCharacter})(Characters)