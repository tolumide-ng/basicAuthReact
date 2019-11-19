import axios from "axios";

export const axiosCall = async ({ path, payload, method, contentType }) => {
	const url = `${process.env.REACT_APP_BASE_URL}${path}`;
	const headers = {
		// "x-access-token": localStorage.token,
		"Content-Type": contentType || "application/json",
	};
	const axiosdata = {
		method,
		url,
		data: payload,
		headers,
		json: true,
	};

	try {
		const response = await axios(axiosdata);

		return response;
	} catch (error) {
		if (error.response) {
			// The request was made and the server responded with a status code
			// that falls out of the range of 2xx
			// throw new Error(error.response.data);
			return error.response.data;
			// console.log(error.response.status);
			// console.log(error.response.headers);
		} else if (error.request) {
			// The request was made but no response was received
			// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
			// http.ClientRequest in node.js
			return error.request;
		} else {
			// Something happened in setting up the request that triggered an Error
			return "Error", error.message;
		}
		// return error;
	}
};
