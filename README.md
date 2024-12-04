# Sorteios de Loterias

Bem-vindo ao repositório do **Projeto Sorteios de Loterias**! Este projeto é uma aplicação web construída com **Next.js**, **React**, e **Tailwind CSS**. O objetivo do projeto é exibir os resultados de sorteios de loterias, utilizando requisições feitas com **`getServerSideProps`** para buscar dados dinâmicos de sorteios em tempo real.

Este projeto foi desenvolvido para fins de aprendizado e demonstração das capacidades do **Next.js** em conjunto com **Tailwind CSS** para estilização.


## API Loterias CAIXA - Guto  Alves
A api consumida foi a construida pelo Guto Alves em Java Spring, segue o repositorio no Github

https://github.com/guto-alves/loterias-api

## 🛠 Tecnologias Utilizadas

| Tecnologia         | Descrição                                                          |
|--------------------|--------------------------------------------------------------------|
| **Next.js**        | Framework React para renderização do lado do servidor (SSR) e geração de sites estáticos. |
| **React**          | Biblioteca para criação de interfaces de usuário.                  |
| **Tailwind CSS**   | Framework CSS utilitário para estilização rápida e responsiva.     |
| **JavaScript**     | Linguagem de programação principal utilizada no projeto.          |

## 📖 Estrutura do Projeto

src/
├── components/        # Componentes reutilizáveis (ex: Cabeçalho, Lista de Sorteios)
├── pages/             # Páginas principais (ex: Home, Detalhes do Sorteio)
├── styles/            # Arquivos de estilos, incluindo Tailwind
└── utils/             # Funções utilitárias e hooks personalizados 

public/
├── images/            # Imagens estáticas (logo, banners, etc.)

package.json           # Dependências e scripts do projeto
tailwind.config.js     # Configurações do Tailwind CSS
next.config.js         # Configurações do Next.js




## 🌟 Funcionalidades

- Exibição de resultados de sorteios de loterias.
- Requisições de dados em tempo real utilizando `getServerSideProps` para renderização no servidor.
- Design moderno e responsivo com **Tailwind CSS**.
- Exibição de detalhes sobre cada sorteio, como data, números sorteados e prêmios.

## 🚀 Como Executar

Siga os passos abaixo para rodar o projeto localmente:

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/sorteios-loterias.git

2. Clone este repositório:

    ```bash
    cd sorteios-loterias

3. Instale as dependencias:

    ```bash
    npm install

4. Execute o servidor de desenvolvimento:

    ```bash
    npm run dev

4. Execute o servidor de desenvolvimento:

    ```bash
    Abra o navegador e acesse http://localhost:3000 para visualizar a aplicação.


## 🧑‍🏫 Objetivo do Projeto

Este projeto foi desenvolvido com o propósito de aprender e aplicar conceitos de Next.js e Tailwind CSS em um projeto real. A utilização do getServerSideProps permite buscar dados dinâmicos diretamente no servidor, o que é útil para exibir os resultados dos sorteios de loterias em tempo real.


## ⚡ Aprendizados

- Utilização do **Next.js** para renderização no servidor (SSR) com `getServerSideProps`.
- Criação de interfaces responsivas e modernas com **Tailwind CSS**.
- Conexão e consumo de **APIs** externas para exibição de dados dinâmicos (neste caso, sorteios de loteria).