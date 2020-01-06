import React from 'react'
import Characters from '../components/Characters'
import {connect} from 'react-redux'


class CharacterContainer extends React.Component {
    render() {
        return (
            <div>
                <Characters characters={this.props.characters}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {characters: state.charactersReducer}
}

export default connect(mapStateToProps)(CharacterContainer)