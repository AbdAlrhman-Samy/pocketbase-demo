import React from "react";

export const ErrorList = ({ error }) => {
	return (
		<>
			<h3>{error.message}</h3>
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
		</>
	);
};
