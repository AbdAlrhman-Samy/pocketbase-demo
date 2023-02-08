import { NavLink } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar">
			<ul>
				<li>
					<strong>Noklu</strong>
				</li>
			</ul>
			<ul>
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="/auth">Account</NavLink>
				</li>
			</ul>
		</nav>
	);
};
