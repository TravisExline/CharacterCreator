import React from 'react'

class CharacterCard extends React.Component {
    render() {
        if(this.props.character.user_id === this.props.userId) {
        return (
            <div className="character-container">
                <h2 className="character-name">{this.props.character.name}</h2>
                <p className="character-class">Class: {this.props.character.spec}</p>
                <p className="character-race">Race: {this.props.character.race}  </p>
                <p className="character-age">Age: {this.props.character.age}  </p>
                <p className="character-str">Strength: {this.props.character.str}  </p>
                <p className="character-dex">Dexterity: {this.props.character.dex}  </p>
                <p className="character-const">Constitution: {this.props.character.const}  </p>
                <p className="character-int">Intellect: {this.props.character.int}  </p>
                <p className="character-wis">Wisdom: {this.props.character.wis}  </p>
                <p className="character-char">Charisma: {this.props.character.char}  </p>
                <p className="character-level">Level: {this.props.character.details}  </p>
                <button onClick={() => this.props.handleDestroy(this.props.id)} type="button" className="character-delete">Delete {this.props.character.name}</button>
            </div>
        )} else {
            return (
                <div>
                </div>
            )
        }
    }
} 

export default CharacterCard