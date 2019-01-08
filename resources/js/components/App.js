import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import { IS_AUTH } from '../actions/types';
import setAuthToken from '../utils/setAuthToken';
import { getCurrentUser } from '../actions/authActions';
import Login from './Login';
import Register from './Register';
import Navbar from './Navbar';

//Check for token
if (localStorage.jwtToken) {
    //Set auth token header auth
    setAuthToken(localStorage.jwtToken);
    //Get current user and isAuthenticated
    store.dispatch({
        type: IS_AUTH,
        payload: true
    });
    store.dispatch(getCurrentUser());
}

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Navbar />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={Register} />
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
