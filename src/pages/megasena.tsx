import { fetchMegaSenaData } from "../api/loteriaapi";
import Navbar from "@/components/navbar";
import Concurso from "@/components/concurso";
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
export default function Megasena({ concursos }: { concursos: MegaSenaProps | null }) {
  if (!concursos) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <p className="text-xl text-gray-700">Erro ao carregar os dados. Tente novamente mais tarde.</p>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Resultado da Mega Sena
        </h2>
        <Concurso concursos={concursos} />
      </main>
    </div>
  );
}
