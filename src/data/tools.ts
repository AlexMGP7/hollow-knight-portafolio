export interface Tools {
  id: number;
  logo: string;
  name: string;
}

export const tools: Tools[] = [
  {
    id: 1,
    logo: "/src/assets/logos/jira.png",
    name: "Jira",
  },
  {
    id: 2,
    logo: "/src/assets/logos/vscode.png",
    name: "VSCode",
  },
  {
    id: 3,
    logo: "/src/assets/logos/github.png",
    name: "Github",
  },
  {
    id: 4,
    logo: "/src/assets/logos/git.png",
    name: "git",
  },
  {
    id: 5,
    logo: "/src/assets/logos/debian.png",
    name: "debian",
  },
  {
    id: 6,
    logo: "/src/assets/logos/postman.png",
    name: "postman",
  },
];
