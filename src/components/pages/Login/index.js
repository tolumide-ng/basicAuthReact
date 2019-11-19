import React from "react";
import LoginTemplate from "../../UI/templates/Login";
import Header from "../../UI/molecules/Header";

const Login = () => {
	return (
		<div className="bg-gray-1100 h-screen w-100">
			<Header />
			<LoginTemplate />
		</div>
	);
};

export default Login;
