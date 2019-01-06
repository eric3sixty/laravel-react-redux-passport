import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';

import Login from './Login';
import NewComp from './Register';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="container">
                        <Route exact path="/" component={Login} />
                        <Route exact path="/register" component={NewComp} />
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
