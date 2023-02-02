import React from "react";
import { FaUserAstronaut } from "react-icons/fa";

export const Login = () => {
	return (
		<article>
			<header>
				<hgroup>
					<h1> <FaUserAstronaut/> Login</h1>
					<p>Glad To Have You Back!</p>
				</hgroup>
			</header>

			<div className="grid">
				<form className="container">
					<label htmlFor="email">
						Email
						<input type="email" name="email" id="email" />
					</label>

					<label htmlFor="password">
						Password
						<input type="password" name="password" id="password" />
					</label>

					<button type="submit" className="auth-btn">Log in</button>
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
