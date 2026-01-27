export interface Project {
    id: string;
    title: string;
    description: string;
    category: string;
    stack: string[];
    liveUrl?: string;
    githubUrl?: string;
    imageUrl: string;
}

export const projects: Project[] = [
    {
        id: "1",
        title: "Site Tuxnet",
        category: "Full Stack",
        description: "End-to-end ISP management solution. Automated billing cycles and customer diagnostics, reducing support tickets by 30% via intelligent dashboarding.",
        stack: ["Blade", "Laravel", "JavaScript", "MySQL", "Docker"],
        liveUrl: "https://www.redetuxnet.com.br",
        githubUrl: "#",
        imageUrl: "/redetux.png",
    },
   
];