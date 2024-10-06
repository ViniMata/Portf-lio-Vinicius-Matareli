import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header className="flex bg-red-800 justify-around items-center h-20 w-screen">
                <div className="text-5xl font-extrabold">
                    VM
                </div>
                <nav>
                    <ul className="flex gap-4">
                        <li>
                            <NavLink 
                                to="/" 
                                className={({ isActive }) => isActive ? "text-white font-bold" : "text-gray-300"}
                                aria-label="Página Inicial">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/projetos" 
                                className={({ isActive }) => isActive ? "text-white font-bold" : "text-gray-300"}
                                aria-label="Projetos">
                                Projetos
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/sobre" 
                                className={({ isActive }) => isActive ? "text-white font-bold" : "text-gray-300"}
                                aria-label="Sobre">
                                Sobre
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/curriculo" 
                                className={({ isActive }) => isActive ? "text-white font-bold" : "text-gray-300"}
                                aria-label="Currículo">
                                Currículo
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
