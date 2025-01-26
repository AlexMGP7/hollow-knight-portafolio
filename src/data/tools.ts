export interface Tools {
  id: number;
  logo: string;
  name: string;
}

export const tools: Tools[] = [
  {
    id: 10, 
    logo: "/src/assets/logos/mysql.svg",
    name: "MySQL",
  },
  {
    id: 11, 
    logo: "/src/assets/logos/firebase.svg",
    name: "Firebase",
  },
  {
    id: 5,
    logo: "/src/assets/logos/postman.svg",
    name: "postman",
  },
  {
    id: 1,
    logo: "/src/assets/logos/jira.svg",
    name: "Jira",
  },
  {
    id: 2,
    logo: "/src/assets/logos/vscode.svg",
    name: "VSCode",
  },
  {
    id: 3,
    logo: "/src/assets/logos/github.svg",
    name: "Github",
  },
  {
    id: 4,
    logo: "/src/assets/logos/git.svg",
    name: "git",
  },
  {
    id: 6, 
    logo: "/src/assets/logos/docker.svg",
    name: "Docker",
  },
  {
    id: 7,
    logo: "/src/assets/logos/debian.svg",
    name: "debian",
  },
];
