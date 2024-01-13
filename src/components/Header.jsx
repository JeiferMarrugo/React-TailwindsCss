import { useEffect, useState } from "react";
import MoonIcon from "./Icons/MoonIcon";
import SunIcon from "./Icons/SunIcon";

const initialStateDarkMode = localStorage.getItem("theme") === "dark";

const Header = () => {
    const [darkMode, setDarkMode] = useState(initialStateDarkMode);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");

            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("theme", "dark");

            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <header className="container pt-8 mx-auto px-4">
            <div className="flex justify-between">
                <h1 className="uppercase text-white text-2xl font-semibold tracking-[0.4em]">
                    Tareas
                </h1>
                <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? <SunIcon /> : <MoonIcon />}
                </button>
            </div>
        </header>
    );
};

export default Header;
