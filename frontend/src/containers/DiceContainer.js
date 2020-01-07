import React from 'react'
import DiceRoll from '../components/DiceRoll'
import '../style/Dice.css'

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
            <div className="dice-container"> 
                <button className="dice-btn" onClick={this.rollDice}>Roll The Dice</button>
                <div className="dice-container-2"><DiceRoll number={this.state.randomNum} /></div>
            </div>
        )
    }
}

export default Dice