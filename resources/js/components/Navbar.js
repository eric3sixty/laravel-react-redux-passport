import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logOutUser } from '../actions/authActions';

class Navbar extends Component {
    onLogOutClick(e) {
        e.preventDefault();
        this.props.logOutUser();
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <ul className="navbar-nav ml-auto">

<li className="nav-item">
                <Link className="navbar-brand" href="/dashboard" to="/dashboard">
                        Dashboard
                    </Link>
                </li>

                <li className="nav-item">
                    <a href="#" className="nav-link">
                        {user.email}
                    </a>
                </li>
               
                
                <li className="nav-item">
                    <a
                        href="#"
                        className="nav-link"
                        onClick={this.onLogOutClick.bind(this)}
                    >
                        Log Out
                    </a>
                </li>
            </ul>
        );

        const guestLinks = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" href="/register" to="/register">
                        Sign Up
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href="/login" to="/login">
                        Login
                    </Link>
                </li>
            </ul>
        );

        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
                <div className="container">
                    <Link className="navbar-brand" href="/" to="/">
                        Laravel-Passport
                    </Link>
                    
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#mobile-nav"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="mobile-nav">
                        {isAuthenticated ? authLinks : guestLinks}
                    </div>
                </div>
            </nav>
        );
    }
}

Navbar.propTypes = {
    logOutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logOutUser }
)(Navbar);
