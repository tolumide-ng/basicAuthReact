import React from "react";

const Label = ({ name, labelname = undefined, classes, ...rest }) => (
	<label
		htmlFor={name}
		{...rest}
		classes={classes}
		className={`text-sm text-gray-600 ${classes}`}
	>
		{labelname || name}
	</label>
);

export default Label;
