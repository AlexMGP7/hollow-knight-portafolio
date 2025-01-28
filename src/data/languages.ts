export interface Language {
  id: number;
  logo: string;
  name: string;
}

export const languages: Language[] = [
  {
    id: 11, 
    logo: "/logos/nextjs.png", 
    name: "Next.js",
  },
  {
    id: 1, 
    logo: "/logos/react.svg",
    name: "React",
  },
  {
    id: 2, 
    logo: "/logos/javascript.png",
    name: "JavaScript",
  },
  {
    id: 3, 
    logo: "/logos/typescript.png",
    name: "TypeScript",
  },
  {
    id: 4, 
    logo: "/logos/nodejs.svg",
    name: "Node.js",
  },
  {
    id: 5, 
    logo: "/logos/tailwindcss.svg",
    name: "Tailwind CSS",
  },
  {
    id: 6, 
    logo: "/logos/bootstrap.svg",
    name: "Bootstrap",
  },
  {
    id: 7, 
    logo: "/logos/cakephp.svg",
    name: "CakePHP",
  },
  {
    id: 8,
    logo: "/logos/php.svg",
    name: "PHP",
  },
  {
    id: 9, 
    logo: "/logos/sql.svg",
    name: "SQL",
  },

];