import { SET_CURRENT_USER, IS_AUTH } from '../actions/types';

const initalState = {
    isAuthenticated: false,
    user: {}
};

export default function(state = initalState, action) {
    switch (action.type) {
        case IS_AUTH:
            return {
                ...state,
                isAuthenticated: action.payload
            };
        case SET_CURRENT_USER:
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
}
