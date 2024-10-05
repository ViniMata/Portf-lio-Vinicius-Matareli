import fotoDePerfil from '../assets/images/foto_de_perfil-removebg-preview.png';
export default function HomePage() {
    return (
        <>
            <div className="h-screen flex items-center space-x-80">
                <div className="container w-80 ml-44">
                    <h1 className="text-white text-7xl flex justify-center 
                ">Oi! Eu sou Vinícius Matareli.</h1>
                </div>
                <div>
                    <img className="h-auto w-96 mr-44" src={fotoDePerfil} alt="minha foto" />
                </div>
            </div>
            <div className='h-96 flex flex-col'>
                <div className='flex justify-center text-5xl'>
                    <h1>Deixe me apresentar.</h1>
                </div>
                <div className='flex flex-col ml-44'>
                    <p className='flex mt-10 justify-start text-xl'>Me interessei pela programação no ultimo ano e aprendi algumas coisas.</p>
                    <p className='flex mt-10 justify-start text-xl'>Tenho experiencia em Python e React (Html, Css e JS) </p>
                </div>
            </div>
        </>
    )

}