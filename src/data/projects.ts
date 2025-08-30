// data/projects.ts

export interface Project {
  id: number;
  image: string;
  content: string;
  text: string;
  git: string;
  online: string;
}

export const projects: Project[] = [
  {
    id: 0,
    image: "/img/NextGram.jpg",
    content: "NextGram",
    text: "Projeto FullStack com Next, PostgreSQL, OAUTH Google...",
    git: "https://github.com/Popotomimi/NextGram",
    online: "https://instanext.netlify.app/",
  },
  {
    id: 1,
    image: "/img/ReactQuiz.jpg",
    content: "ReactQuiz",
    text: "Um jogo de perguntas e respostas sobre programação.",
    git: "https://github.com/Popotomimi/React_Quiz",
    online: "https://reactquizdev.netlify.app/",
  },
  {
    id: 2,
    image: "/img/Album.jpg",
    content: "Album de Photos",
    text: "Projeto onde você pode acessar um banco de imagens e realizar o download...",
    git: "https://github.com/Popotomimi/PhotoAlbum",
    online: "https://albumreactphotos.netlify.app/",
  },
  {
    id: 3,
    image: "/img/DevNotes.jpg",
    content: "DevNotes",
    text: "Projeto FullStack um clone do Google Keep",
    git: "https://github.com/Popotomimi/DevNotes",
    online: "https://devnotesreact.netlify.app/",
  },
  {
    id: 4,
    image: "/img/GitHubFinder.jpg",
    content: "DevNotes",
    text: "Projeto que faz integração com a API do GitHub",
    git: "https://github.com/Popotomimi/DevNotes",
    online: "https://devnotesreact.netlify.app/",
  },
  {
    id: 5,
    image: "/img/MemoryGame.jpg",
    content: "MemoryGame",
    text: "Desenvolvi um jogo de memória com ícones de animais",
    git: "https://github.com/Popotomimi/MemoryGame/tree/Seccond",
    online: "https://gamereactmemory.netlify.app/",
  },
];
