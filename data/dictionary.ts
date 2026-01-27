export const dictionary = {
    en: {
        navbar: {
            home: "Home",
            projects: "Projects",
            workflow: "Workflow",
            skills: "Skills",
            about: "About",
        },
        hero: {
            role: "FULL STACK ENGINEER",
            headline: "Full Stack Engineer &",
            highlight: "Automation",
            enthusiast: "Enthusiast",
            subheadline: "Turning complex problems into scalable solutions with PHP, React, and Modern DevOps.",
            cta_primary: "View Work",
            cta_secondary: "Resume",
        },
        skills: {
            title: "Technical",
            highlight: "Arsenal",
            subtitle: "A comprehensive toolkit designed for scalability. From crafting intuitive UIs to deploying resilient server-side architectures.",
            frontend: {
                title: "Frontend Engineering",
                desc: "Building pixel-perfect, responsive interfaces with modern architectural patterns.",
                capabilities: ["SPA & SSR", "State Management", "Component Patterns"],
            },
            backend: {
                title: "Backend & Systems",
                desc: "Designing robust APIs, managing databases and ensuring secure data flow.",
                capabilities: ["RESTful APIs", "Authentication", "Database Design"],
            },
            devops: {
                title: "DevOps & Automation",
                desc: "Streamlining development workflows and automating business logic.",
                capabilities: ["CI/CD Flows", "Containerization", "Process Automation"],
            },
        },
        projects: {
            title: "Featured",
            highlight: "Projects",
            subtitle: "A selection of complex systems and scalable solutions I've engineered.",
            demo: "Demo",
            code: "Code",
            items: [
                {
                    title: "Site Tuxnet",
                    description: "Landing page for ISP with a modern design and responsive layout. It includes a history of the company and its services.",
                    category: "Full Stack"
                }
               
            ]
        },
        
       about: {
            title: "About",
            highlight: "Me",
            p1_start: "I'm Isaac, a 21-year-old Computer Engineering student and certified Systems Development Technician. I work as a Full Stack Engineer passionate about",
            p1_highlight: "Software Architecture",
            p1_end: "and high-performance solutions.",
            p2: "My journey combines the solid foundation of technical training with the analytical mindset of engineering. I have practical experience in both corporate operations (ISP) and the dynamic independent market.",
            p3: "I don't just write code; I design resilient ecosystems that bridge hardware, software, and automation to solve complex real-world problems.",
            branding: "<EngineeringIsArt />",
            contact: "Get in Touch",
        },
        footer: {
            built_by: "Built by",
            with: "with Next.js & Tailwind.",
        },
        workflow: {
            title: "My",
            highlight: "Workflow",
            subtitle: "From vague requirements to deployed, scalable software. Here is how I deliver value.",
            steps: [
                {
                    title: "Discovery & Design",
                    description: "Understanding the business needs, sketching architecture in Excalidraw, and planning the DB schema."
                },
                {
                    title: "Development",
                    description: "Writing clean, typed code (TypeScript/PHP). Focusing on modular components and atomic commits."
                },
                {
                    title: "CI/CD & Testing",
                    description: "Automating pipelines with GitHub Actions. Running linters and building Docker containers."
                },
                {
                    title: "Deploy & Monitor",
                    description: "Shipping to production (Vercel/AWS). Setting up logs and monitoring performance."
                }
            ]
        },
    },
    pt: {
        navbar: {
            home: "Início",
            projects: "Projetos",
            workflow: "Processo",
            skills: "Habilidades",
            about: "Sobre",
        },
        hero: {
            role: "ENGENHEIRO FULL STACK",
            headline: "Engenheiro Full Stack &",
            highlight: "Automação",
            enthusiast: "Entusiasta",
            subheadline: "Transformando problemas complexos em soluções escaláveis com PHP, React e DevOps Moderno.",
            cta_primary: "Ver Portfolio",
            cta_secondary: "Currículo",
        },
        skills: {
            title: "Arsenal",
            highlight: "Técnico",
            subtitle: "Um conjunto completo de ferramentas projetado para escalabilidade. Da criação de interfaces intuitivas à arquitetura de servidores resilientes.",
            frontend: {
                title: "Engenharia Frontend",
                desc: "Construção de interfaces responsivas e pixel-perfect com padrões arquiteturais modernos.",
                capabilities: ["SPA & SSR", "Gestão de Estado", "Padrões de Componentes"],
            },
            backend: {
                title: "Backend e Sistemas",
                desc: "Design de APIs robustas, gestão de bancos de dados e fluxo seguro de dados.",
                capabilities: ["APIs RESTful", "Autenticação", "Modelagem de Dados"],
            },
            devops: {
                title: "DevOps e Automação",
                desc: "Otimização de fluxos de desenvolvimento e automação de processos de negócio.",
                capabilities: ["Fluxos CI/CD", "Containerização", "Automação de Processos"],
            },
        },
        projects: {
            title: "Projetos",
            highlight: "Destaque",
            subtitle: "Uma seleção de sistemas complexos e soluções escaláveis que projetei.",
            demo: "Demo",
            code: "Código",
            // VERSÃO EM PORTUGUÊS DOS PROJETOS
            items: [
                {
                    title: "Site Tuxnet",
                    description: "Landing page para ISP visualmente pensado para divulgar serviços de internet, TV e telefone. Além de contar a historia da empresa e seus serviços.",
                    category: "Full Stack"
                }
              
            ]
        },
        about: {
            title: "Sobre",
            highlight: "Mim",
          
            p1_start: "Sou Isaac, 21 anos, estudante de Engenharia da Computação e Técnico em Desenvolvimento de Sistemas. Atuo como Engenheiro Full Stack com foco em",
            p1_highlight: "Arquitetura de Software",
            p1_end: "e soluções de alta performance.",
            
            p2: "Minha trajetória combina a base sólida de uma formação técnica com a visão analítica da engenharia. Tenho experiência prática tanto em operações corporativas (ISP) quanto no dinamismo do mercado independente.",
            
            p3: "Vou além do código: projeto ecossistemas resilientes que unem hardware, software e automação para resolver problemas complexos do mundo real.",
            
            branding: "<CodeIsArt />", 
            contact: "Entrar em Contato",
        },
        workflow: {
            title: "Meu",
            highlight: "Processo",
            subtitle: "De requisitos vagos a software escalável em produção. É assim que eu entrego valor.",
            steps: [
                {
                    title: "Descoberta & Design",
                    description: "Entendendo as necessidades do negócio, desenhando a arquitetura e planejando o banco de dados."
                },
                {
                    title: "Desenvolvimento",
                    description: "Escrevendo código limpo e tipado. Foco em componentes modulares e commits atômicos."
                },
                {
                    title: "CI/CD & Testes",
                    description: "Automatizando pipelines com GitHub Actions. Rodando linters e construindo containers Docker."
                },
                {
                    title: "Deploy & Monitoramento",
                    description: "Entregando em produção. Configurando logs e monitorando a performance."
                }
            ]
        },
        footer: {
            built_by: "Desenvolvido por",
            with: "com Next.js & Tailwind.",
        },
    },
};

export type Language = "en" | "pt";