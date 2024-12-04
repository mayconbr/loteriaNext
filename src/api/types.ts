interface Premiacao{
    descricao: string;
    faixa: string;
    ganhadores: string;
    valorPremio: number;
}

interface LocalGanhador{
    ganhadores: number;
    municipio: string;
    nomeFantasiaUL: string;
    serie: string;
    posicao: number;
    uf: string;
}
 
interface Premio {
    descricao: string;
    faixa: number;s
    ganhadores: number;
    valorPremio: number;
}
  
interface MegaSenaProps{
    loteria: string;
    concurso: number;
    data: string;
    local: string;
    dezenasOrdemSorteio: string[];
    dezenas: string[];
    trevos: any[];
    timeCoracao: string | null;
    mesSorte: string | null;
    premiacoes: Premio[];
    estadosPremiados: string[];
    observacao: string;
    acumulou: boolean;
    proximoConcurso: number;
    dataProximoConcurso: string;
    localGanhadores: string[];
    valorArrecadado: number;
    valorAcumuladoConcurso_0_5: number;
    valorAcumuladoConcursoEspecial: number;
    valorAcumuladoProximoConcurso: number;
    valorEstimadoProximoConcurso: number;
};
  