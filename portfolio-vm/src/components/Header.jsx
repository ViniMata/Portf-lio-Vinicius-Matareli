import { NavLink } from "react-router-dom";

export default function Header(){
    
    return(
        <>
            <header className="flex bg-red-800 justify-around items-center h-20">
                    <div className="  text-5xl font-extrabold">
                        VM
                    </div>
                <nav>
                    <ul className="flex gap-4">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/projetos">Projetos</NavLink></li>
                        <li><NavLink to="/sobre">Sobre</NavLink></li>
                        <li><NavLink to="/curriculo">Curriculo</NavLink></li>
                        <li><NavLink to="/redes">Redes</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}