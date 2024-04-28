import NodeJS from "../assets/backend-technology/node.png";
import NestJS from "../assets/backend-technology/nest.png";
import PrismaORM from "../assets/backend-technology/prisma.png";
import MySQL from "../assets/backend-technology/mysql.png";
import Docker from "../assets/backend-technology/docker.png";

import Sass from "../assets/frontend-tecnology/sass.png";
import VueJS from "../assets/frontend-tecnology/vue.png";
import Typescript from "../assets/frontend-tecnology/typescript.png";
import GitHub from "../assets/frontend-tecnology/gitHub.png";
import HTML5 from "../assets/frontend-tecnology/html5.png";
import Javascript from "../assets/frontend-tecnology/javascript.png";
import CSS3 from "../assets/frontend-tecnology/css3.png";


export type ImageProps = {
  id: number;
  name: string;
  description: string;
  image_url: string;
};
export const arrayA: ImageProps[] = [
  {
    id: 1,
    name: "Node.JS",
    description:
      "Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web. A principal característica do Node.js é sua arquitetura assíncrona e orientada por eventos.",
    image_url: NodeJS,
  },
  {
    id: 2,
    name: "Nest.JS",
    description:
      "NestJS é um framework Node.js de código aberto destinado ao desenvolvimento de aplicativos do lado do servidor. Foi criado por Kamil Mysliwiec e lançado em 2017. Sob o capô, por padrão, o NestJS faz uso do framework Express.js, sendo também compatível com o Fastify. Sua arquitetura é fortemente inspirada no Angular.",
    image_url: NestJS,
  },
  {
    id: 3,
    name: "MySQL",
    description:
      "O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface. É atualmente um dos sistemas de gerenciamento de bancos de dados mais populares da Oracle Corporation, com mais de 10 milhões de instalações pelo mundo.",
    image_url: MySQL,
  },

  {
    id: 4,
    name: "Docker",
    description:
      "Docker é um conjunto de produtos de plataforma como serviço que usam virtualização de nível de sistema operacional para entregar software em pacotes chamados contêineres. Os contêineres são isolados uns dos outros e agrupam seus próprios softwares, bibliotecas e arquivos de configuração.",
    image_url: Docker,
  },

  {
    id: 5,
    name: "PrismaORM",
    description:
      "O Prisma é um ORM (Object Relational Mapping), o principal objetivo do ORM é facilitar a interação entre o código da aplicação e os dados armazenados em um banco de dados relacional, eliminando a necessidade de escrever consultas SQL manualmente. Agora vamos ver como usar o Prisma na prática.",
    image_url: PrismaORM,
  },
];

export const arrayB: ImageProps[] = [
  {
    id: 1,
    name: "SASS",
    description:
      "Sass é uma linguagem de folhas de estilo concebida inicialmente por Hampton Catlin e desenvolvida por Natalie Weizenbaum. Depois de suas versões iniciais, Weizenbaum e Chris Eppstein continuaram a estender Sass com SassScript, uma simples linguagem de script usada em arquivos Sass.",
    image_url: Sass,
  },
  {
    id: 2,
    name: "VueJS",
    description:
      "Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única.",
    image_url: VueJS,
  },
  {
    id: 3,
    name: "Typescript",
    description:
      "TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.",
    image_url: Typescript,
  },
  {
    id: 4,
    name: "GitHub",
    description:
      "GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. Ele permite que programadores, utilitários ou qualquer usuário cadastrado na plataforma contribuam em projetos privados e/ou Open Source de qualquer lugar do mundo.",
    image_url: GitHub,
  },
  {
  id: 5,
  name: "HTML5",
  description:
    "HTML5 é uma linguagem de marcação para a World Wide Web e é uma tecnologia chave da Internet, originalmente proposto por Opera Software. É a quinta versão da linguagem HTML.",
  image_url: HTML5,
},
{
  id: 6,
  name: "Javascript",
  description:
    "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.",
  image_url: Javascript,
},
{
  id: 7,
  name: "CSS3",
  description:
    "JCSS3 é a terceira mais nova versão das famosas Cascading Style Sheets, pela qual se define estilos para um projeto web. Com efeitos de transição, imagem, imagem de fundo/background e outros, pode-se criar estilos únicos para seus projetos web, alterando diversos aspectos de design no layout da página.",
  image_url: CSS3,
},
];