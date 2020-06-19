import React from 'react'
import User from '../components/User'
import {connect} from 'react-redux'
import {fetchCharacters} from '../actions/characterActions'
import CharacterCard from '../components/CharacterCard'

class UserContainer extends React.Component {
    
    componentDidMount() {
        this.props.fetchCharacters()
    }

    render() {
        debugger
        return (
            <div>
                <User username={this.props.user.username}/>
                {this.props.characters[Math.floor(Math.random() * characters.length)]}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {user: state.usersReducer, characters: state.charactersReducer}
}

export default connect(mapStateToProps, {fetchCharacters})(UserContainer)
