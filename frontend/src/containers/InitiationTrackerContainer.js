import React from 'react'
import {connect} from 'react-redux'
import InitiationTrackerForm from '../components/InitiationTrackerForm'
import InitationTracker from '../components/InitiationTracker'
import DiceContainer from '../containers/DiceContainer'
import '../style/Initiation.css'

class InitiationTrackerContainer extends React.Component {
    render() {
        return (
            <div>
                <InitiationTrackerForm />
                {this.props.initiationCharacters.map((character, idx) => (
                    <InitationTracker key={idx} newCharacter={character} />
                ))}
                <DiceContainer />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {initiationCharacters: state.initiationReducer}
}

export default connect(mapStateToProps) (InitiationTrackerContainer)