import {FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa'

export default function Footer() {
    return (
        <>
            <footer className="flex fixed bottom-0 bg-red-800 justify-around items-center h-15 w-screen">
                <div className="text-2xl font-extrabold">
                    VM
                </div>
                <nav>
                    <ul className="flex gap-4">
                        <li>
                            <a href="https://github.com/ViniMata" target="_blank" rel="noopener noreferrer" aria-label="GitHub de Vinícius Matareli">
                            <FaGithub className="w-7 h-7 mt-1 text-white" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/_v.matareli_/?hl=pt-br" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Vinícius Matareli">
                            <FaInstagram className="w-7 h-7 mt-1 text-white" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/vinicius-matareli/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Vinícius Matareli">
                            <FaLinkedin className="w-7 h-7 mt-1 text-white" />
                            </a>
                        </li>
                    </ul>
                </nav>
            </footer>
        </>
    );
}
