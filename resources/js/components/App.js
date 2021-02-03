import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import { IS_AUTH } from '../actions/types';
import setAuthToken from '../utils/setAuthToken';
import { getCurrentUser } from '../actions/authActions';
import Login from './Login';
import Register from './Register';
import Main from './Layout';
import Dashboard from './Dashboard';
import AIPMain from '../AIP/AIPMain';
import Home from './Home';
import PrivateRoute from '../components/common/PrivateRoute';
import PublicRoute from '../components/common/PublicRoute';

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
    
    render(props) {

        return (
            <Provider store={store}>
                <Router>
                    <div>
                     
                    <Main />
                            <Route exact path="/home" component={Home} />
                            <Route exact path="/" component={Home} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/register" component={Register} />
                            <Switch>
                            
                                <PrivateRoute path="/main" component={Main} exact />
                                <PrivateRoute path="/dashboard" component={Dashboard} exact />
                                <PrivateRoute path="/aip" component={AIPMain} exact/>
                            </Switch>
                    </div>
                </Router>
            </Provider>
        );
    }
}


export default App;