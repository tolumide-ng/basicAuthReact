import actionTypes from "../../actionTypes/login";

const { LOGIN_SUCCESS, LOGIN_PENDING, LOGIN_FAILURE } = actionTypes;

export const loginPending = () => ({
	type: LOGIN_PENDING,
	payload: {
		error: null,
		user: {},
		status: "pending",
	},
});

export const loginFailure = error => ({
	type: LOGIN_FAILURE,
	payload: {
		error,
		user: {},
		status: "failure",
	},
});

export const loginSuccess = user => ({
	type: LOGIN_SUCCESS,
	payload: {
		error: null,
		user,
		status: "success",
	},
});

export const loginAction = ({ data }) => async dispatch => {
	try {
		const { password, email } = data;
		dispatch(loginPending());

		let decision;

		await setTimeout(() => {
			if (email.split("@") === password) {
				decision = true;
			}
			decision = false;
		}, 100000);

		if (decision) {
			return dispatch(loginSuccess({ email, message: "welcome back" }));
		}
		throw "Not a valid user";
	} catch (error) {
		dispatch(loginFailure(error));
	}
};
