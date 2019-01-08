import setAuthToken from '../utils/setAuthToken';
import { SET_CURRENT_USER, IS_AUTH } from './types';

//Register user
export const registerUser = (userData, history) => dispatch => {
    axios
        .post('/api/auth/signup', userData)
        .then(result => {
            history.push('/login');
        })
        .catch(error => console.log(error));
};

//Login Get User Token
export const loginUser = userData => dispatch => {
    axios
        .post('/api/auth/login', userData)
        .then(result => {
            //Save to localStorage
            const { access_token } = result.data;
            //Set token to localStorage
            localStorage.setItem('jwtToken', access_token);
            //Set token to Auth header
            setAuthToken(access_token);
            dispatch({
                type: IS_AUTH,
                payload: true
            });
        })

        .catch(error => console.log(error));
};

//Get logged in user
export const getCurrentUser = () => dispatch => {
    axios
        .get('/api/auth/user')
        .then(result =>
            dispatch({
                type: SET_CURRENT_USER,
                payload: result.data
            })
        )
        .catch(error => console.log(error));
};

//Log user out
export const logOutUser = () => dispatch => {
    //Remove the token from local storage
    localStorage.removeItem('jwtToken');
    //Remove auth header for future requests
    setAuthToken(false);
    dispatch({
        type: IS_AUTH,
        payload: false
    });
    dispatch({
        type: SET_CURRENT_USER,
        payload: {}
    });
};
