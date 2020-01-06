import React from 'react'

class InitiationTracker extends React.Component {
    render() {
        return (
            <div>
                {this.props.character.characterName}
            </div>
        )
    }
}

export default InitiationTracker