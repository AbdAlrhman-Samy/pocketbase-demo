import React from "react";
import { FaUserAstronaut } from "react-icons/fa";

export const Signup = () => {
	return (
		<article>
			<header>
				<hgroup>
					<h1>
						<FaUserAstronaut /> Sign up
					</h1>
					<p>Welcome to whatever this is!</p>
				</hgroup>
			</header>

			<div className="grid">
				<form className="container">
					<label htmlFor="username">
						Username
						<input type="text" name="username" id="username" />
					</label>

					<label htmlFor="email">
						Email
						<input type="email" name="email" id="email" />
					</label>

					<div className="grid">
						<label htmlFor="password">
							Password
							<input
								type="password"
								name="password"
								id="password"
							/>
						</label>

						<label htmlFor="re-password">
							Password Check
							<input
								type="password"
								name="re-password"
								id="re-password"
							/>
						</label>
					</div>

					<button type="submit" className="auth-btn">
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
	);
};
