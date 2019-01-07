import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import { SET_CURRENT_USER } from './types';

//Register user
export const registerUser = (userData, history) => dispatch => {
    axios
      .post('/api/auth/signup', userData)
      .then(result => {
        history.push('/');
      })
      .catch(error =>
        console.log(error)
      );
  };