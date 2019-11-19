import React from "react";

const Input = ({ inputType, classes, errorLabel, name, ...rest }) => {
	return (
		<input
			type={inputType}
			name={name}
			id={name}
			className={`border pl-3 font-light tracking-wide bg-transparent text-sm w-full border-t-0 border-r-0 border-l-0 border-white text-white outline-none ${!errorLabel &&
				"mb-3"} h-10 inputbox ${classes}`}
			{...rest}
		/>
	);
};

export default Input;
