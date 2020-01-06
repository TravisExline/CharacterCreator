import React from 'react'
import DiceRoll from '../components/DiceRoll'

class Dice extends React.Component {
    state = {
        randomNum: ""
    }
    
    rollDice = () => {
        const roll = Math.floor(Math.random() * (19 - 6) + 6) 
        this.setState({
            randomNum: roll
        })
    }
    
    render() {
        return (
            <div>
                <DiceRoll number={this.state.randomNum} />
                <button onClick={this.rollDice}>Roll The Dice</button>
            </div>
        )
    }
}

export default Dice