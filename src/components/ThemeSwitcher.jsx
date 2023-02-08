import { useEffect, useState } from "react";
import { CiDark, CiLight } from 'react-icons/ci';

export const ThemeSwitcher = () => {

	const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

	useEffect(() => {
		if (!localStorage.getItem("theme")) {
			localStorage.setItem("theme", theme);
		} else {
			localStorage.setItem("theme", theme);
		}

		document.documentElement.setAttribute("data-theme", theme);
	}, [theme]);

	return (
		<button
        className="contrast theme-switcher"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
        {theme === "dark" ? <CiLight className="theme-switcher__icon" /> : <CiDark className="theme-switcher__icon"/>}
		</button>
	);
};
