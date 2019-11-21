import React from "react";

const Input = React.forwardRef((props, ref) => {
	const { classes, errorLabel, name, ...rest } = props.props;
	return (
		<input
			name={name}
			id={name}
			ref={ref}
			className={`border font-light tracking-wide bg-gray-1100 text-sm w-full border-t-0 border-r-0 border-l-0 border-white text-white outline-none ${!errorLabel &&
				"mb-3"} h-10 inputbox ${classes}`}
			{...rest}
		/>
	);
});

export default Input;
