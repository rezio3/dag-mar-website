import React from "react";
import Media from "react-media";
import NavbarMobile from "./Navbar Mobile";
import NavbarDesktop from "./NavbarDesktop";

const Navbar = () => {
	return (
		<>
			<Media query="(min-width: 992px)">
				{(matches) => {
					return matches ? <NavbarDesktop /> : <NavbarMobile />;
				}}
			</Media>
		</>
	);
};

export default Navbar;
