import React from "react";
import { Link } from "react-router-dom";

const LinkButton = ({ to, classes, type, children, ...rest }) => (
	<Link to={to} className={classes} type={type} {...rest}>
		{children}
	</Link>
);

export default LinkButton;
