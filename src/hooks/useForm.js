import { useState } from "react";

const useForm = () => {
	const [userInput, setUserInput] = useState({
		email: "",
		password: "",
	});
	const [disableButton, setDisabledButton] = useState(true);

	const [errors, setErrors] = useState({
		email: "",
		password: "",
	});

	const handleChange = e => {
		const { name, value } = e.target;
		setErrors({ ...errors, [name]: "" });
		setUserInput({ ...userInput, [name]: value });
		userInput.password && userInput.email && setDisabledButton(false);
		!userInput.password || (!userInput.password && setDisabledButton(true));
	};

	const sanitizeData = () => {
		const data = {};
		Object.keys(userInput).forEach(key => {
			data[key] = userInput[key].trim();
		});
		return data;
	};

	return {
		handleChange,
		userInput,
		sanitizeData,
		setUserInput,
		setErrors,
		errors,
		disableButton,
	};
};

export default useForm;
