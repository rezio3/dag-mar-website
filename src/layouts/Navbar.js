import React from "react";
import Media from "react-media";
import NavbarMobile from "./NavbarMobile";
import NavbarDesktop from "./NavbarDesktop";

const Navbar = (props) => {
	return (
		<>
			<Media query="(min-width: 992px)">
				{(matches) => {
					return matches ? (
						<NavbarDesktop />
					) : (
						<NavbarMobile
							burgerActive={props.burgerActive}
							setBurgerActive={props.setBurgerActive}
						/>
					);
				}}
			</Media>
		</>
	);
};

export default Navbar;
