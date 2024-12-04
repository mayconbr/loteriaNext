export async function getStaticProps() {

  const API_URL_LOTEIRA_MEGASENA = "https://loteriascaixa-api.herokuapp.com/api/megasena/latest"

  const response = await fetch(API_URL_LOTEIRA_MEGASENA)
  const data: MegaSenaProps | undefined = await response.json()

  console.log(data)

  return {
    props: {
      concursos: data
    },
    revalidate: 60
  }
}

export default function Home() {
  return (
    <main>
      Hello word
    </main>
  );
}
