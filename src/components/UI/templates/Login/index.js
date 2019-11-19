import React, { useState } from "react";
import InputForm from "../../molecules/InputForm";
import Link from "../../atoms/Link";
import Button from "../../atoms/Button";
import ErrorLabel from "../../molecules/ErrorLog";
import map from "../../../../images/map.png";
import "./index.css";

const LoginTemplate = ({ error }) => {
	const [empty, setEmpty] = useState(true);
	return (
		<div className="w-full flex">
			<div className={"w-6/12 ml-32 pt-20"}>
				<ErrorLabel />
				<h1 className="text-white mb-12 text-4xl capitalize tracking-wider">
					Login
				</h1>
				<form>
					<InputForm
						classes="mb-16"
						placeholder="Email"
						type="text"
					/>

					<div className="mb-16">
						<InputForm
							classes="mb-2"
							placeholder="Password"
							type="password"
						/>
						<Link
							className="text-orange-1100 text-sm font-light tracking-wide antialiased"
							children="Forgot Password?"
							to="#"
						/>
					</div>
					<Button
						children={"Login"}
						type="button"
						classes={`px-16 py-2 antialiased uppercase tracking-widest text-sm font-medium ${
							empty
								? "bg-gray-1200 text-gray-600 "
								: "bg-orange-1200 text-white"
						}`}
					/>
				</form>
			</div>
			<img
				src={map}
				alt="map showing North, South America and some part of Africa"
				className="pt-10"
			/>
		</div>
	);
};

export default LoginTemplate;
