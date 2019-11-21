import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { loginAction } from "../../../../store/actions/login";
import InputForm from "../../molecules/InputForm";
import Link from "../../atoms/Link";
import Button from "../../atoms/Button";
import ErrorLabel from "../../molecules/ErrorLog";
import map from "../../../../images/map.png";
import useForm from "../../../../hooks/useForm";
import { validateLogin as validate } from "../../../../validators";
import Image from "../../atoms/Image";
import "./index.css";

// NB: I left outline on the login button to allows users who might use keyboard for navigation undertand they can submit

const LoginTemplate = ({ loginStatus, loginUser }) => {
	const {
		errors,
		userInput,
		handleChange,
		setErrors,
		sanitizeData,
		disableButton,
	} = useForm();

	const passwordRef = useRef();

	const handleSubmit = e => {
		e.preventDefault();
		setErrors(validate(userInput));
		if (!Object.values(validate(userInput)).find(item => item.length > 1)) {
			const data = sanitizeData(userInput);
			return loginUser({ data });
		}
	};

	const [passwordState, setPasswordState] = useState("show");

	const togglePassword = e => {
		if (passwordRef.current.type === "text") {
			setPasswordState("show");
			return (passwordRef.current.type = "password");
		}
		setPasswordState("hide");
		return (passwordRef.current.type = "text");
	};

	return (
		<div className="w-full flex">
			<div
				className={
					"w-full md:w-10/12 z-20 lg:w-6/12 ml-10 md:ml-32 pt-6"
				}
			>
				<ErrorLabel />
				<h1 className="text-white mb-12 text-4xl capitalize tracking-wider">
					Login
				</h1>
				<form onSubmit={handleSubmit}>
					<InputForm
						classes="mb-16"
						placeholder="Email"
						type="text"
						errorLabel={errors.email}
						name="email"
						value={userInput.email}
						onChange={handleChange}
						label={`${userInput.email}`}
					/>

					<div className="mb-16">
						<div className="flex w-full">
							<InputForm
								classes="w-11/12"
								placeholder="Password"
								type="password"
								errorLabel={errors.password}
								name="password"
								value={userInput.password}
								onChange={handleChange}
								label={`${userInput.password}`}
								childRef={passwordRef}
							/>
							<Button
								className={`border font-light tracking-wide text-sm z-20 border-t-0 border-r-0 border-l-0 border-white text-orange-1100 pb-2 uppercase self-end outline-none items-bottom flex justify-end w-1/12 ${
									errors.password ? "majo" : "mb-3"
								}`}
								children={
									userInput.password ? passwordState : ""
								}
								onClick={togglePassword}
								type="button"
							/>
							>
						</div>

						<Link
							className="text-orange-1100 text-sm font-light tracking-wide antialiased"
							children="Forgot Password?"
							to="#"
						/>
					</div>
					<Button
						children={
							loginStatus === "pending"
								? "L O A D I N G ..."
								: "LOGIN"
						}
						type="submit"
						disabled={disableButton}
						classes={`px-16 py-2 antialiased uppercase tracking-widest text-sm font-medium ${
							userInput.email && userInput.password
								? "bg-orange-1200 text-white"
								: "bg-gray-1200 text-gray-600"
						}`}
					/>
				</form>
			</div>
			<div className="flex justify-center invisible md:visible">
				<Image
					src={map}
					alt="map showing North, South America and some part of Africa"
					className="object-cover"
				/>
			</div>
		</div>
	);
};

const mapStateToProps = state => ({
	loginStatus: state.loginReducer.status,
});

const mapDispatchToProps = dispatch => ({
	loginUser: ({ data }) => {
		return dispatch(loginAction({ data }));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginTemplate);
