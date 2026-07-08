import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  ifma,
  carrent,
  jobit,
  pocket,
  threejs,
  portifolio,
  java,
  python,
  sql,
  arduino,
} from "../assets";

export const navLinks = [
  {
    id: "sobre",
    title: "Sobre",
  },
  {
    id: "projetos",
    title: "Projetos",
  },
  {
    id: "contato",
    title: "Contato",
  },
];

const services = [
  {
    title: "Desenvolvedor Web",
    icon: web,
  },
  {
    title: "Frontend",
    icon: mobile,
  },
  {
    title: "Backend",
    icon: backend,
  },
  {
    title: "Robótica",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Micro Cont.",
    icon: arduino,
  },
];

const experiences = [
  {
    title: "TECNÓLOGO EM ANÁLISE E DESENVOLVIMENTO DE SISTEMAS",
    company_name: "Instituto Federal do Maranhão",
    icon: ifma,
    iconBg: "#383E56",
    date: "Cursando 6º Período",
    points: [

    ],
  },
  {
    title: "TÉCNICO EM AUTOMAÇÃO INDUSTRIAL",
    company_name: "Instituto Federal do Maranhão",
    icon: ifma,
    iconBg: "#E6DEDD",
    date: "Setembro de 2021 - Março de 2023",
    points: [

    ],
  },

];

const projects = [
  {
    name: "Connect App",
    description:
      "Aplicativo desenvolvido em equipe pela 1° turma de ADS do IFMA campus Coelho Neto. Usado duranto o evento Connect Ifma. Atuei sendo desenvolvedor no backend e QA da aplicação.",
    tags: [
      {
        name: "React-native",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/IgorRaiad0/connect_api",
  },
  {
    name: "Sistema de Votação Web",
    description:
      "Sistema web desenvolvido na faculdade, com objetivo de gerir e automatizar as votações da camara de vereadores. Projeto desenvolvido em grupo com Frontend e Backend completo, onde atuei como desenvolvedor no backend usando a arquitetura MVC.",
    tags: [
      {
        name: "Vuejs",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "Nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/IgorRaiad0/Votacao_backend",
  },
  {
    name: "Pocket Perssonal Trainer",
    description:
      "Aplicativo desenvolvido com React-Native. Com o objetivo de treinar o consumo de APIS de LLMS. Aplicativo que gera um treino personalizado baseado nas respostas de um questinário.",
    tags: [
      {
        name: "React-Native",
        color: "blue-text-gradient",
      },
      {
        name: "Axios",
        color: "green-text-gradient",
      },
      {
        name: "Gemini-API",
        color: "pink-text-gradient",
      },
    ],
    image: pocket,
    source_code_link: "https://github.com/IgorRaiad0/Pocket-Personal-Trainer-APP",
  },

  {
    name: "My 3d Portifolio",
    description:
      "Meu portifolio, pessoal desenvolvido para o treino e estudo de react, threejs e tailwind. Nele procurei treinar uma arquitetura modular e escalável orientada a componentes.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Threejs",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portifolio,
    source_code_link: "https://github.com/IgorRaiad0/My-3d-Portifolio.git",
  },
];

export { services, technologies, experiences, projects };