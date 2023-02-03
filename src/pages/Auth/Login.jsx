import React, { useEffect, useRef, useState } from "react";
import { FaUserAstronaut } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { pb } from "../../Pocketbase.config";

export const Login = () => {
	const email = useRef()
	const pswrd = useRef()
	const [isLoading, setIsLoading] = useState(false);
	const [userData, setUserData] = useState(null)
	const [error, setError] = useState(null)


	const navigate = useNavigate()


	const handleSignupForm = async (e) => {
		e.preventDefault();
		
		try {
			await pb.collection('users').authWithPassword(email.current.value, pswrd.current.value);
		} catch (err) {
			setError(err)	
			console.log(err.data);		
			throw new Error(err)
		}
		

	};

	function signin(e) {
		setIsLoading(true);
		
		handleSignupForm(e)
			.then((data) => {
				setUserData(data)
				setIsLoading(false);
				setError(null)
				navigate("/user")

			})
			.catch((err) => {
				setIsLoading(false);
			});

	}


	useEffect(() => {
		if(userData){
			console.log('working');
		  	navigate("/user")
		}
	  
	  }, [userData])



	return (
		<article>
			<header>
				<hgroup>
					<h1> <FaUserAstronaut/> Login</h1>
					<p>Glad To Have You Back!</p>
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
				<form className="container" onSubmit={signin}>
					<label htmlFor="email">
						Email
						<input type="email" name="email" id="email" ref={email} />
					</label>

					<label htmlFor="password">
						Password
						<input type="password" name="password" id="password" ref={pswrd} />
					</label>

					<button type="submit" className="auth-btn" aria-busy={isLoading}>Log in</button>
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
