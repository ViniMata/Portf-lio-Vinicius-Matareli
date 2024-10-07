export default function About() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black">
            <div className=" p-8 rounded shadow-md w-full max-w-4xl text-white">
                <h1 className="text-6xl font-bold mb-6 text-center">Quem eu sou?</h1>
                <p className="text-2xl mb-4">Olá a todos, eu sou o Vinícius Pereira Matareli. Atualmente estou cursando bacharelado de Engenharia de Software na FIAP.</p>
                <p className="text-2xl mb-6">Além de programar, gosto muito dos meus hobbies.</p>
                <ul className="list-disc list-inside text-2xl space-y-2 ml-8">
                    <li>Musculação</li>
                    <li>Jogar Video Game</li>
                    <li>Jogar Quadball</li>
                    <li>Praticar Esportes (geral)</li>
                </ul>
            </div>
        </div>
    );
}
