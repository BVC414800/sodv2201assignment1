import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
		<NavLink to="/home.js" activeStyle>
			Home
		</NavLink>
		<NavLink to="/welcome.js" activeStyle>
			Login
		</NavLink>
		<NavLink to="/forgot.js" activeStyle>
			Forgot Password?
		</NavLink>
		<NavLink to="/signup.js" activeStyle>
			Sign Up
		</NavLink>
		<NavLink to="/schedule.js" activeStyle>
			User Schedule
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;