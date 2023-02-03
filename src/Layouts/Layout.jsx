import { Outlet } from "react-router";
import { Navbar } from "../components/Navbar";
import { ThemeSwitcher } from "../components/ThemeSwitcher";

export const Layout = () => {

	return (
		<main className="container">
			<Navbar/>
			<ThemeSwitcher />
			<div>
				<Outlet/>
			</div>
		</main>
	);
};
