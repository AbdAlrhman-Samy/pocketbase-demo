import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import { FaUserAstronaut } from "react-icons/fa";

export const AuthLayout = () => {
	return (
		<div className="auth-form">
			<h1>
				<FaUserAstronaut /> Authenticate Here
			</h1>

			<Outlet />
      <hr />
			<div className="grid">
				<NavLink to="login">
					<button className="outline">Already Have an Account?</button>
				</NavLink>

				<NavLink to="signup">
					<button className="outline">Create a New Account?</button>
				</NavLink>
			</div>

		</div>
	);
};
