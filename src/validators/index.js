export const validateLogin = (values, submitted = false) => {
	if (!values) return "validateSigup expects an argument";
	let errors = {};

	errors[
		"email"
	] = /^\w+([.-]?\w+)+@\w+([.:]?\w+)+(\.[a-zA-Z0-9]{2,})+$/.test(values.email)
		? ""
		: "Email address is invalid";

	// errors[
	// 	"password"
	// ] = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
	// 	values.password
	// )
	// 	? ""
	// 	: "Password must be alphanumeric and contain atleast one special character";

	errors["password"] = values.password.length
		? ""
		: "Password cannot be empty";

	return errors;
};
