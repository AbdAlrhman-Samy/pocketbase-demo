import { useRef } from "react";
import { FaUserAstronaut } from "react-icons/fa";
import { Navigate } from "react-router-dom";
import useSignup from "../../hooks/useSignup";
import { pb } from "../../Pocketbase.config";

import { ErrorList } from "./ErrorList";

export const Signup = () => {
	const username = useRef();
	const email = useRef();
	const pswrd = useRef();
	const repswrd = useRef();

	const { trigger: signup, data, error, isMutating } = useSignup();

	async function handleSignup(e) {
		e.preventDefault();

		const creds = {
			email: email.current.value,
			password: pswrd.current.value,
			passwordConfirm: repswrd.current.value,
			username: username.current.value,
			avatarURL: `https://api.dicebear.com/5.x/thumbs/svg?seed=${username.current.value}`,
		};

		await signup(creds);
	}

	if (data && !isMutating) {
		return <Navigate to={"/auth/login"} />;
	}
	if (pb.authStore.isValid) return <Navigate to={"/user"} />;

	return (
		<>
			<article>
				<header>
					<hgroup>
						<h1>
							<FaUserAstronaut /> Sign up
						</h1>
						<p>Welcome to whatever this is!</p>
					</hgroup>
					{error && <ErrorList error={error} />}
				</header>

				<div className="grid">
					<form className="container" onSubmit={handleSignup}>
						<label htmlFor="username">
							Username
							<input
								type="text"
								name="username"
								id="username"
								ref={username}
							/>
						</label>

						<label htmlFor="email">
							Email
							<input
								type="email"
								name="email"
								id="email"
								ref={email}
							/>
						</label>

						<div className="grid">
							<label htmlFor="password">
								Password
								<input
									type="password"
									name="password"
									id="password"
									ref={pswrd}
								/>
							</label>

							<label htmlFor="re-password">
								Password Check
								<input
									type="password"
									name="re-password"
									id="re-password"
									ref={repswrd}
								/>
							</label>
						</div>

						<button
							type="submit"
							className="auth-btn"
							aria-busy={isMutating}>
							Create My Account
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
		</>
	);
};
