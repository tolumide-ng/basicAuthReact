import actionTypes from "../../actionTypes/login";

import initialState from "../../initialState/login";

const { LOGIN_FAILURE, LOGIN_PENDING, LOGIN_SUCCESS } = actionTypes;

const loginTypes = [LOGIN_FAILURE, LOGIN_PENDING, LOGIN_SUCCESS];

const loginReducer = (state = initialState, { type, payload }) => {
	return loginTypes.includes(type) ? { ...state, ...payload } : state;
};

export default loginReducer;
