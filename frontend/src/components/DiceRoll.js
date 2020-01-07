import React from 'react'
import '../style/Dice.css'

class DiceRoll extends React.Component {
    render() {
        return (
            <div>
                <p className='dice-number'>{this.props.number}</p>
            </div>
        )
    }
}

export default DiceRoll