import curriculoPDF from '../assets/Curriculo (6).pdf';

export default function Curriculo() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Meu Currículo</h1>

      <div className=" bg-red-800 p-6 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-3xl font-bold mb-4">Vinícius Pereira Matareli</h2>
        <p className="text-lg">Engenharia de Software - FIAP</p>
        <p className="text-lg mb-4">Email: vinicius.matareli2005@gmail.com</p>

        <h3 className="text-2xl font-bold mt-6">Educação</h3>
        <p className="text-lg">Bacharelado em Engenharia de Software - FIAP (Conclusão em 2027)</p>

        <h3 className="text-2xl font-bold mt-6">Habilidades Técnicas</h3>
        <ul className="list-disc list-inside text-lg">
          <li>Desenvolvimento Web (HTML, CSS, JavaScript, React)</li>
          <li>Python para análise de dados e automação</li>
          <li>Microcontroladores e IoT (ESP32, DHT22, MQTT)</li>
          <li>Integração de APIs e Web Services</li>
        </ul>
      </div>

      <a
        href={curriculoPDF}
        download="Curriculo-Vinicius-Matareli.pdf"
        className="mt-6 bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-6 rounded"
      >
        Baixar Currículo
      </a>
    </div>
  );
}
