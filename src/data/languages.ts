export interface Language {
  id: number;
  logo: string;
  name: string;
}

export const languages: Language[] = [
  {
    id: 1,
    logo: "/src/assets/logos/javascript.png",
    name: "JavaScript",
  },
  {
    id: 2,
    logo: "/src/assets/logos/typescript.png",
    name: "TypeScript",
  },
  {
    id: 3,
    logo: "/src/assets/logos/php.svg",
    name: "PHP",
  },
  {
    id: 4,
    logo: "/src/assets/logos/sql.svg",
    name: "SQL",
  },
];
