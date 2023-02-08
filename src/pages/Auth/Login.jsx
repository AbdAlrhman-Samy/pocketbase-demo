import { useRef } from "react";
import useLogin from "../../hooks/useLogin";

import { Navigate } from "react-router-dom";
import { ErrorList } from "./ErrorList";
import { FaUserAstronaut } from "react-icons/fa";
import { pb } from "../../Pocketbase.config";

export const Login = () => {
	const email = useRef();
	const pswrd = useRef();

	const { trigger: login, error, isMutating } = useLogin();


	async function signin(e) {
		e.preventDefault();

		const creds = {
			email: email.current.value,
			password: pswrd.current.value,
		};

		await login(creds);
	}

	if (pb.authStore.isValid) {
		return <Navigate to={"/user"}/>
	}

	return (
		<article>
			<header>
				<hgroup>
					<h1>
						{" "}
						<FaUserAstronaut /> Login
					</h1>
					<p>Glad To Have You Back!</p>
				</hgroup>
				{error && <ErrorList error={error} />}
			</header>

			<div className="grid">
				<form className="container" onSubmit={signin}>
					<label htmlFor="email">
						Email
						<input
							type="email"
							name="email"
							id="email"
							ref={email}
						/>
					</label>

					<label htmlFor="password">
						Password
						<input
							type="password"
							name="password"
							id="password"
							ref={pswrd}
						/>
					</label>

					<button
						type="submit"
						className="auth-btn"
						aria-busy={isMutating}>
						Log in
					</button>
				</form>
				<img
					src="https://picsum.photos/500"
					className="auth-form__image"
					height="500"
					width="500"
					alt="placeholder"
				/>
			</div>
		</article>
	);
};
