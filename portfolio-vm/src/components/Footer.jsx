import github from '../assets/images/github.png';
import linkedin from '../assets/images/linkedin.png';
import instagram from '../assets/images/instagram_logo_icon.webp';

export default function Footer() {
    return (
        <>
            <footer className="flex fixed bottom-0 bg-red-800 justify-around items-center h-13 w-screen">
                <div className="text-2xl font-extrabold">
                    VM
                </div>
                <nav>
                    <ul className="flex gap-4">
                        <li>
                            <a href="https://github.com/ViniMata" target="_blank" rel="noopener noreferrer" aria-label="GitHub de Vinícius Matareli">
                                <img
                                    src={github}
                                    alt="Logo GitHub"
                                    className="w-8 h-8"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/_v.matareli_/?hl=pt-br" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Vinícius Matareli">
                                <img
                                    src={instagram}
                                    alt="Logo Instagram"
                                    className="w-8 h-8"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/vinicius-matareli/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Vinícius Matareli">
                                <img
                                    src={linkedin}
                                    alt="Logo LinkedIn"
                                    className="w-8 h-8"
                                />
                            </a>
                        </li>
                    </ul>
                </nav>
            </footer>
        </>
    );
}
