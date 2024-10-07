import fotoDePerfil from '../assets/images/foto_de_perfil-removebg-preview.png';

export default function HomePage() {
    return (
        <>
            <div className="h-screen flex items-center justify-between">
                <div className="flex flex-col items-start space-y-6 ml-5">
                    <h1 className="text-white text-7xl">Oi! Eu sou Vinícius Matareli.</h1>
                    <button 
                        onClick={() => window.location.href = "/contato"} 
                        className="bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Entre em contato
                    </button>
                </div>
                <div>
                    <img className="h-auto w-96 mr-20 border-4 rounded-full bg-white" src={fotoDePerfil} alt="minha foto" />
                </div>
            </div>
            <div className='h-96 flex flex-col'>
                <div className='flex justify-center text-5xl'>
                    <h1>Deixe-me apresentar.</h1>
                </div>
                <div className='flex flex-col ml-44'>
                    <p className='flex mt-10 justify-start text-xl'>Me interessei pela programação no último ano e aprendi várias coisas.</p>
                    <p className='flex mt-10 justify-start text-xl'>Tenho experiência em Python e React (HTML, CSS e JS).</p>
                    <p className='flex mt-10 justify-start text-xl'>Atualmente, estou focado em desenvolver projetos de assuntos que me interessam.</p>
                </div>
            </div>
        </>
    );
}
