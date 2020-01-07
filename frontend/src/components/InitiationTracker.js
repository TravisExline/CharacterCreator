import React from 'react'


class InitiationTracker extends React.Component {
    render() {
        return (
            <div>
                <h2 className='character-initiation'>{this.props.newCharacter.characterName}</h2>
            </div>
        )
    }
}

export default InitiationTracker