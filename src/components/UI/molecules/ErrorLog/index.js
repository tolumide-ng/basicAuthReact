import React from "react";
import { connect } from "react-redux";
import Link from "../../atoms/Link";
import error from "../../../../images/error.png";
import Image from "../../atoms/Image";

const ErrorLog = ({ errorStatus }) => {
	return (
		<div
			className={`flex items-center bg-gray-1200 py-2 mb-10 text-sm ${
				errorStatus === "failure" ? "" : "invisible"
			}`}
		>
			<Image
				src={error}
				classes="h-4 w-4 ml-1 mr-2"
				alt="Login Error Icon"
			/>
			<div className="text-white items-center">
				Invalid email and/or password. Don't have an acoount?{" "}
				<Link classes="text-orange-1100" to="#">
					Register
				</Link>
			</div>
		</div>
	);
};
// export default ErrorLog;

const mapStateToProps = state => {
	return {
		errorStatus: state.loginReducer.status,
	};
};

export default connect(mapStateToProps)(ErrorLog);
