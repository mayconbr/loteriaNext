import { fetchMegaSenaData } from "../api/loteriaapi";
import Logo from "../../public/logo-caixa.png";
import Image from 'next/image';

export async function getStaticProps() {
  try {
    const data = await fetchMegaSenaData();

    return {
      props: {
        concursos: data,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    return {
      props: {
        concursos: null,
      },
      revalidate: 60,
    };
  }
}

export default function Home({ concursos }: { concursos: MegaSenaProps | null }) {
  if (!concursos) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <p className="text-xl text-gray-700">Erro ao carregar os dados. Tente novamente mais tarde.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Cabeçalho */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-6 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
        <Image src={Logo.src} alt="Logo" width={50} height={50}/>   
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-white hover:text-gray-200 transition duration-200">Início </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Lista de Informações */}
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Resultado da Mega Sena
        </h2>
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-bold text-gray-700">
            Concurso: {concursos.concurso}
          </h3>
          <p className="text-gray-600 mt-2">Data: {concursos.data}</p>
          <p className="text-gray-600 mt-2">Números sorteados:</p>
          <ul className="flex space-x-2 mt-4">
            {concursos.dezenas.map((numero, index) => (
              <li
                key={index}
                className="bg-blue-100 text-blue-600 font-semibold rounded-lg px-4 py-2"
              >
                {numero}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
