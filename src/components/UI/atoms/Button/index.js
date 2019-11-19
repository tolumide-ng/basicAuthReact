import React from "react";
import Loader from "../Loader";

const Button = ({
	onClick,
	classes,
	type,
	name,
	children,
	isSubmit,
	...rest
}) => (
	<button
		onClick={onClick}
		className={classes}
		type={type}
		disabled={isSubmit || false}
		{...rest}
	>
		{!isSubmit ? children || name : <Loader />}
	</button>
);

export default Button;
