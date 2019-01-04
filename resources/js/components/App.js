import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Test from './Login';
import NewComp from './Register';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Route exact path="/" component={Test} />
                    <Route exact path="/register" component={NewComp} />
                </div>
            </Router>
        );
    }
}

export default App;
