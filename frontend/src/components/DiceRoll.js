import React from 'react'

class DiceRoll extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.number}</p>
            </div>
        )
    }
}

export default DiceRoll