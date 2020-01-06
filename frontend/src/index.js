import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserContainer from './containers/UserContainer'
import CreationForm from './components/CreationForm'
import CharacterContainer from './containers/CharacterContainer'
import InitiationTrackerContainer from './containers/InitiationTrackerContainer'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {store} from './store'


ReactDOM.render(
    <Router>
        <div>
        <Provider store={store}>
            <Route exact path="/" component={App} />
            <Route exact path="/user" component={UserContainer} />
            <Route exact path="/character-creation" component={CreationForm} />
            <Route exact path="/characters" component={CharacterContainer} />
            <Route exact path="/initiation" component={InitiationTrackerContainer} />
        </Provider>
        </div>
    </Router>, 
document.getElementById('root')
);
