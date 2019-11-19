import React from "react";
import Link from "../../atoms/Link";
import error from "../../../../images/error.png";

const ErrorLog = ({ errorStatus = true }) => {
	return (
		<div
			className={`flex items-center bg-gray-1200 py-2 pl-3 mb-10 text-sm ${
				errorStatus ? "visible" : "invisible"
			}`}
		>
			<img src={error} className="h-4 w-4 mr-2" alt="Login Error Icon" />
			<div className="text-white">
				Invalid email and/or password. Don't have an acoount?{" "}
				<Link classes="text-orange-1100" to="#">
					Register
				</Link>
			</div>
		</div>
	);
};
export default ErrorLog;
