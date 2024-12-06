const Concurso = ({ concursos }: { concursos: MegaSenaProps | null }) => {
  if (!concursos) {
    return (
      <div className="bg-red-100 text-red-600 p-4 rounded-lg">
        <p>Não foi possível carregar os dados do concurso.</p>
      </div>
    );
  }

  return (
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
  );
};

export default Concurso;
