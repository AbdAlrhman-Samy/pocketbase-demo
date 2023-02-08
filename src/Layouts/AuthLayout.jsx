import { useState } from "react";
import { Navigate, Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import { Modal } from "../components/Modal";
import { pb } from "../Pocketbase.config";

export const AuthLayout = () => {

	const [openModal, setOpenModal] = useState(false)
	const [modalData, setModalData] = useState("")

	
	if (pb.authStore.isValid) {
		return <Navigate to={"/user"}/>
	}

	return (
		<div className="auth-form">
			{openModal && <Modal open={openModal} setOpen={setOpenModal} data={modalData} />}

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
