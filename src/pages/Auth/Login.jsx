import React from "react";

export const Login = () => {
	return (
		<div className="grid">
			<form className="container">
				<hgroup>
					<h1>Login</h1>
					<p>Glad To Have You Back!</p>
				</hgroup>

				<label htmlFor="email">
					Email
					<input type="email" name="email" id="email" />
				</label>

				<label htmlFor="password">
					Password
					<input type="password" name="password" id="password" />
				</label>

				<button type="submit">Log in</button>
			</form>
			<img
				src="https://picsum.photos/500"
				className="auth-form__image"
				height="500"
				width="500"
				alt="placeholder"
			/>
		</div>
	);
};
