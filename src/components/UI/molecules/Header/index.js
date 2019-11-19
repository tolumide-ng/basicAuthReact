import React from "react";
import logo from "../../../../images/logo.png";
import globe from "../../../../images/globe.png";
// import globe from "../../../../public/globe.png";

const Header = () => {
	return (
		<div className="flex justify-between bg-transparent items-center pt-6 pl-6 pr-4">
			<div>
				<img
					src={logo}
					alt="Logo of Ariya Digital"
					className="h-8 w-16"
				/>
			</div>

			<div className="flex flex-row justify-center items-center">
				<img src={globe} alt="Icon of the globe" className="h-4 w-4" />
				<p className="text-white text-xs ml-2">EN</p>
			</div>
		</div>
	);
};

export default Header;
