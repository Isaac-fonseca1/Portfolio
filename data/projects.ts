export interface Project {
    id: string;
    title: string;
    description: string;
    category: string;
    stack: string[];
    liveUrl?: string;
    githubUrl?: string;
    imageUrl: string;
    isCommercial?: boolean; // Adicionei isso pra ter a borda colorida no Tuxnet
}

export const projects: Project[] = [
    {
        id: "1",
        title: "Site Tuxnet",
        category: "Full Stack",
        description: "End-to-end ISP management solution. Automated billing cycles and customer diagnostics, reducing support tickets by 30% via intelligent dashboarding.",
        stack: ["Blade", "Laravel", "JavaScript", "MySQL", "Docker"],
        liveUrl: "https://www.redetuxnet.com.br",
        githubUrl: "", // Deixe vazio para aparecer "Private"
        imageUrl: "/redetux.png",
        isCommercial: true // Ativa o badge "PROD" e a borda ciano
    },
    {
        id: "2",
        title: "MineOps Manager",
        category: "Automation", 
        description: "Real-time server monitoring dashboard simulating a Linux environment. Features live console logs, resource usage tracking (CPU/RAM), and player management.",
        stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"], 
        liveUrl: "/monitor", 
        githubUrl: "https://github.com/seu-usuario/seu-repo", 
        imageUrl: "/mineOPS.png", 
        isCommercial: false
    },
    {
        id: "3",
        title: "Bakery ERP System", // Título interno (inglês)
        category: "Full Stack",
        description: "Complete management system for a local bakery chain...",
        stack: ["PHP", "Laravel", "Bootstrap", "MySQL", "Chart.js"], // Ajuste conforme a realidade
        liveUrl: "/backery", // Se não tiver link online, deixe vazio
        githubUrl: "", // Se for privado, deixe vazio
        imageUrl: "/backery.jpeg", // Lembre de colocar a imagem na pasta public
        isCommercial: true // Freelance conta como comercial
    }//,
    // {
    //id: "4",
     //title: "Clinical Therapy SaaS (Stealth)",
     //category: "Full Stack", 
    // description: "Plataforma de gestão clínica focada em intervenção comportamental baseada em dados. Destaque para segurança (LGPD), tracking longitudinal de pacientes e automação de relatórios complexos.",
    // stack: ["Laravel", "MySQL", "React & Tailwind + ShadCN", "Recharts", "PDF Generation"],
     // liveUrl: "/clinical-saas",
    // githubUrl: "",
   // imageUrl: "/healthtech-diagram.png", // Sugestão: Diagrama de fluxo de dados
    // isCommercial: true
//} 
];