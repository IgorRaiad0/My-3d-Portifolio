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
  tripguide,
  threejs,
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
    title: "Robotica",
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "TECNOLOGO EM ANÁLISE E DESENVOLVIMENTO DE SISTEMAS",
    company_name: "Instituto Federal do Maranhão",
    icon: ifma,
    iconBg: "#383E56",
    date: " Cursando 6º Periódo",
    points: [
      ,
    ],
  },
  {
    title: "TÉCNICO EM AUTOMAÇÃO INDUSTRIAL",
    company_name: "Instituto Federal do Maranhão",
    icon: ifma,
    iconBg: "#E6DEDD",
    date: "Setembro de 2021 - Março de 2023",
    points: [
      ,
    ],
  },
  
];

const projects = [
  {
    name: "Connect App",
    description:
      "lorem epsum",
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
      "lorem epsum",
    tags: [
      {
        name: "Vuejs",
        color: "blue-text-gradient",
      },
      {
        name: "PotgreeSQL",
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
    name: "Pocket Perssoal",
    description:
      "Lorem epsum",
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
    image: tripguide,
    source_code_link: "https://github.com/IgorRaiad0/Pocket-Personal-Trainer-APP",
  },
];

export { services, technologies, experiences, projects };