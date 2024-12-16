import Navbar from "@/components/navbar";
import Concurso from "@/components/concurso";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Inicio
        </h2>
      </main>
    </div>
  );
}