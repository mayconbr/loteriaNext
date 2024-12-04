export const fetchMegaSenaData = async () => {
    const API_URL_LOTEIRA_MEGASENA = "https://loteriascaixa-api.herokuapp.com/api/megasena/latest";
  
    const response = await fetch(API_URL_LOTEIRA_MEGASENA);
    if (!response.ok) {
      throw new Error("Erro ao buscar dados da Mega Sena");
    }
  
    const data = await response.json();
    return data;
  };
  