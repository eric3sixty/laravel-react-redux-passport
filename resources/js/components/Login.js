import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser, getCurrentUser } from '../actions/authActions';
import '../styles/login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/main');
        }
    }

    componentDidUpdate(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/main');
            this.props.getCurrentUser();
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        // e.preventDefault();
        const data = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.loginUser(data);
    }

    render() {
        return (

            <section id="cover" className="min-vh-100">
                <div id="cover-caption">
                    <div className="container">
                        <div className="row text-white">
                            <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                                <h4 className="display-10 py-2 text-dark">Sign-In</h4>
                                <div className="px-2">
                                    <form action="" className="justify-content-center">
                                        <div className="form-group">
                                            <label className="sr-only">Username</label>
                                            <input
                                            type="text"
                                            name="email"
                                            value={this.state.email}
                                            onChange={this.onChange}
                                            className="form-control"
                                        />
                                        </div>
                                        <div className="form-group">
                                            <label className="sr-only">Password</label>
                                            <input
                                            type="password"
                                            name="password"
                                            value={this.state.password}
                                            onChange={this.onChange}
                                            className="form-control"
                                        />
                                        </div>
                                        <input
                                        type="submit"
                                        value="Submit"
                                        className="btn btn-primary"
                                    />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
 
          
        );
    }
}

Login.propTypes = {
    auth: PropTypes.object.isRequired,
    loginUser: PropTypes.func.isRequired,
    getCurrentUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { loginUser, getCurrentUser }
)(Login);
