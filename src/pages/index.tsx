import Navbar from "@/components/navbar";
import Concurso from "@/components/concurso";

export default function Home() {
  return (
      <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Inicio
        </h2>
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300">
          <p>Este é um projeto de estudo feito para aprender e explorar o Next.js, o poderoso framework React focado em desempenho e simplicidade. 🚀</p>
          <p>Utilizando a API da Mega-Sena, este projeto traz funcionalidades básicas que mostram como integrar dados externos de forma eficiente em um aplicativo web moderno.</p>

          <ul className="flex space-x-2 mt-4">
          <li className="bg-blue-100 text-blue-600 font-semibold rounded-lg px-4 py-2">Megasena</li>
          <li className="bg-blue-100 text-blue-600 font-semibold rounded-lg px-4 py-2">Lotofacil</li>
          <li className="bg-blue-100 text-blue-600 font-semibold rounded-lg px-4 py-2">Quina</li>
      </ul>
        </div>
      </main>
      </div>
  );
}