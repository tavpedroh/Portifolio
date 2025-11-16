import GestorEscolarLogo from '../assets/images/GestorEscolarLogo.png';
import MercadoFacilLogo from '../assets/images/MercadoFacilLogo.png';
import TubeFlixLogo from '../assets/images/TubeFlixLogo.png';
import OrganoLogo from '../assets/images/OrganoLogo.png';
import CriptografadorTextoLogo from '../assets/images/CriptografadorTextoLogo.png';


export const projects = [
  {
    id: 1,
    title: "Gestor Escolar",
    description: "Sistema completo para gestão escolar, incluindo cadastro de alunos, cursos e disciplinas. Implementa autenticação de usuários e controle de acesso baseado em funções.",
    imageUrl: GestorEscolarLogo,
    technologies: ["Java", "SpringBoot", "Sql", "BCrypt"],
    repoLink: "https://github.com/tavpedroh/Gestor-Escolar",
    liveLink: null,
  },
  {
    id: 2,
    title: "Mercado Fácil",
    description: "Aplicativo web para facilitar compras em supermercados, permitindo aos usuários criar listas de compras (a implementar), localizar produtos e comparar preços entre diferentes lojas.",
    imageUrl: MercadoFacilLogo, 
    technologies: ["React", "Axios", "API REST", "CSS Modules", "TypeScript", "Node.js"],
    repoLink: "https://github.com/tavpedroh/Mercado-Facil",
    liveLink: null,
  },
  {
    id: 3,
    title: "TubeFlix",
    description: "Plataforma de streaming de vídeos com funcionalidades como upload, categorização e reprodução de vídeos.",
    imageUrl: TubeFlixLogo, 
    technologies: ["React", "Axios", "Componentização", "JSON"],
    repoLink: "https://github.com/tavpedroh/tubeflix",
    liveLink: "https://tubeflix-henna.vercel.app/",
  },
  {
    id: 4,
    title: "Organo",
    description: "Aplicativo para gerenciar equipes e colaboradores, permitindo a criação, edição e exclusão de membros em diferentes times. Focado em organização e visualização clara das informações.",
    imageUrl: OrganoLogo, 
    technologies: ["React", "CSS Modules", "Componentização"],
    repoLink: "https://github.com/tavpedroh/organo",
    liveLink: "https://organo-three-chi.vercel.app/",
  },
  {
    id: 5,
    title: "Encodificador/Decodificador",
    description: "Aplicativo web que permite aos usuários codificar e decodificar mensagens utilizando um algoritmo simples de substituição de caracteres. Ideal para aprender conceitos básicos de criptografia.",
    imageUrl: CriptografadorTextoLogo,
    technologies: ["JavaScript", "CSS Modules", "HTML5"],
    repoLink: "https://github.com/tavpedroh/codificador-texto",
    liveLink: null,
  },
];