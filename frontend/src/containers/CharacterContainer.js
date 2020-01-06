import React from 'react'
import CharacterCard from '../components/CharacterCard'
import {connect} from 'react-redux'
import {fetchCharacters, destroyCharacter} from '../actions/characterActions'
import '../style/Character.css'
import NavBar from '../components/NavBar'

class CharacterContainer extends React.Component {
    componentDidMount() {
        this.props.fetchCharacters()
    }

    render() {
        return (
            <div>
                <NavBar />
                {this.props.characters.map((character) => (
                    <CharacterCard key={character.id} character={character} userId={this.props.user.id} handleDestroy={this.props.destroyCharacter}/>
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {characters: state.charactersReducer, user: state.usersReducer}
}

export default connect(mapStateToProps, {fetchCharacters, destroyCharacter})(CharacterContainer)