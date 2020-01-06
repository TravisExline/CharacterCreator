import React from 'react';
import SignInForm from './components/SignInForm'
import UserContainer from './containers/UserContainer'
import {connect} from 'react-redux'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        { this.props.user.username ?
        <UserContainer username={this.props.user.username}/>
        :
        <SignInForm />
  }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {user: state.usersReducer}
}

export default connect(mapStateToProps)(App);

