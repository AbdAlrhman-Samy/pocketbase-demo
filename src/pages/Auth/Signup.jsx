import { useEffect, useRef, useState } from "react";
import { FaUserAstronaut } from "react-icons/fa";
import { Navigate, redirect, useNavigate, useOutletContext, useRouteError } from "react-router-dom";
import { Modal } from "../../components/Modal";

import { pb } from "../../Pocketbase.config";

export const Signup = () => {
	const username = useRef()
	const email = useRef()
	const pswrd = useRef()
	const repswrd = useRef()
	const [isLoading, setIsLoading] = useState(false);
	const [userData, setUserData] = useState(null)
	const [error, setError] = useState(null)

	const navigate = useNavigate()

	const handleSignupForm = async (e) => {
		e.preventDefault();
		const data = {
			name: username.current.value,
			username: username.current.value,
			email: email.current.value,
			password: pswrd.current.value,
			passwordConfirm: repswrd.current.value,
			avatarURL: `https://api.dicebear.com/5.x/thumbs/svg?seed=${username.current.value}`,
		};

		try {
			await pb.collection("users").create(data);

		} catch (err) {
			setError(err)
			throw new Error(err)
		}

	};

	function signup(e) {
		setIsLoading(true);
		
		handleSignupForm(e)
			.then((data) => {
				setUserData(data)
				setIsLoading(false);
				setError(null)
				navigate("/auth/login")
			})
			.catch((err) => {
				setIsLoading(false);
			});

	}


	useEffect(() => {
	  if(userData){
		console.log('working');
	  } else console.log('none');
	
	}, [userData])
	

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

					{error && (
						<ul>
							
							{Object.keys(error.data.data).map((key) => {
								return (
									<li key={key}>
										<b>{key.toUpperCase()}</b>:{" "}
										{String(error.data.data[key].message)}
									</li>
								);
							})}
						</ul>
					)}
				</header>

				<div className="grid">
					<form className="container" onSubmit={signup}>
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
							aria-busy={isLoading}
							disabled={isLoading}>
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
