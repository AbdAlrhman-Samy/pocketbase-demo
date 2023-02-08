import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";

export const AuthLayout = () => {


	return (
		<div className="auth-form">

			<Outlet context={[setOpenModal, setModalData]} />
			<hr />
			<div className="grid">
				<NavLink to="login">
					<button className="outline">
						Already Have an Account?
					</button>
				</NavLink>

				<NavLink to="signup">
					<button className="outline">Create a New Account?</button>
				</NavLink>
			</div>
		</div>
	);
};
