export type Locale = "pt" | "en";

export const dictionary = {
  pt: {
    nav: {
      services: "Serviços",
      cases: "Cases",
      method: "Processo",
      stack: "Stack",
      contact: "Contato",
      cta: "Conversar no WhatsApp",
    },
    hero: {
      eyebrow: "Engenheiro de software · Brasil",
      titlePre: "Tiro empresas",
      titleAccent: "da planilha",
      titlePost: ".",
      lede:
        "Construo SaaS internos, automações e integrações sob medida. Do banco ao botão, da API ao dashboard — entrego sistema que sustenta a operação que sua empresa precisa pra crescer.",
      ctaPrimary: "Conversar no WhatsApp",
      ctaSecondary: "Ver cases",
      socialProof: "Sistemas em produção em telecom, saúde, marketing e operação multifilial.",
      badge: {
        label: "Em produção desde",
        year: "2023",
        note: "Software meu operando em telecom regional, clínica hospitalar e governança de ativos.",
      },
    },
    stats: {
      eyebrow: "Operação em números",
      lede: "Cada número aqui corresponde a um sistema operando em produção.",
      items: [
        { value: "11", label: "cidades atendidas pelo provedor que tem o site que eu construí" },
        { value: "3", label: "anos costurando sistema, integração e dado em produção" },
        { value: "84", label: "testes automatizados no SaaS de gestão clínica" },
        { value: "3", label: "APIs externas unificadas no dashboard de tráfego pago" },
      ],
    },
    marquee: {
      label: "Stack ativo",
    },
    about: {
      eyebrow: "Quem sou eu",
      title: "Sou Isaac Fonseca.",
      paragraphs: [
        "Engenheiro de software brasileiro. Construo SaaS internos, integro APIs, automatizo operação com n8n e mexo com hardware quando o problema pede.",
        "Trabalho em produção desde 2023. Hoje os sistemas que entrego operam em provedor de internet regional na Bahia, em clínica especializada em terapia ABA, em time de tráfego pago multimídia e em governança de ativos multifilial. Cada um começou em uma reunião de descoberta e segue rodando.",
        "Atuo em três frentes: projeto sob medida, consultoria técnica pontual e escopo continuado. Foco em PMEs e clínicas que precisam de software costurado para o jeito que sua operação realmente funciona. Trabalho remoto, fuso BRT.",
      ],
      signature: "— Isaac · Brasil",
    },
    services: {
      eyebrow: "O que entrego",
      title: "Cinco formas de tirar sua operação do improviso.",
      lede:
        "Cada uma resolve um tipo diferente de dor. Quase todo projeto que entrego mistura duas ou três delas — porque problema de operação raramente vive em um lugar só.",
      items: [
        {
          icon: "saas",
          title: "SaaS interno sob medida",
          body:
            "Sistema construído pra um negócio específico, com a regra desse negócio costurada no código. Backend, frontend, banco, deploy e operação inicial.",
        },
        {
          icon: "automation",
          title: "Automações com n8n",
          body:
            "Fluxos que conectam sistemas que você já paga e elimina tarefa repetitiva do time. ETL, sincronização, alerta automático, gatilho condicional.",
        },
        {
          icon: "api",
          title: "Integrações com APIs externas",
          body:
            "Meta Marketing, Google Ads, Bitrix24, Google Cloud, BigQuery, Gemini, Claude, GPT. Integração resiliente a rate limit, com normalização e auditoria.",
        },
        {
          icon: "hardware",
          title: "Hardware e monitoramento",
          body:
            "Coleta em endpoint físico, agente em servidor, leitura de equipamento. Inventário, monitoramento ativo e governança que conversa com seu sistema.",
        },
        {
          icon: "consulting",
          title: "Consultoria técnica",
          body:
            "Diagnóstico de arquitetura, revisão de stack, plano de migração, definição de escopo antes de você abrir CNPJ pra contratar dev. Pago por hora ou pacote curto.",
        },
      ],
    },
    pain: {
      eyebrow: "O problema",
      title: "Sua operação roda em planilha — e a conta começou a chegar.",
      lede:
        "O time copia dado de um sistema para outro. O gestor pede um relatório que demora três dias. Cada filial faz do seu jeito. Um deslize humano vira incidente fiscal, perda de equipamento, paciente sem retorno.",
      points: [
        {
          title: "Planilha não tem dono.",
          body:
            "Quando todo mundo edita, ninguém é responsável. O dado fica errado e não se sabe quando, nem por quem.",
        },
        {
          title: "Sistema legado não conversa.",
          body:
            "Você paga três SaaS que não trocam informação. O atendente refaz o mesmo cadastro em três telas.",
        },
        {
          title: "Padrão depende de quem está de plantão.",
          body:
            "Sem processo embutido no sistema, padronização vive na memória de quem está há mais tempo. Quando essa pessoa sai, sai junto.",
        },
      ],
    },
    method: {
      eyebrow: "Processo",
      title: "Antes do código, o processo.",
      lede:
        "Mapeio a operação, desenho o fluxo que o sistema vai forçar e só então escolho stack. Processo desenhado primeiro é o que faz o sistema entrar para a rotina do time e ficar.",
      steps: [
        {
          n: "01",
          title: "Diagnóstico (30 min, gratuito)",
          body:
            "Call objetiva. Você descreve a dor, eu pergunto o que importa. Saímos com clareza mútua sobre se faz sentido seguir.",
        },
        {
          n: "02",
          title: "Escopo + protótipo navegável",
          body:
            "Em 1 a 2 semanas: protótipo clicável + proposta com escopo, prazo e preço fechados. Orçamento fixo, não elástico.",
        },
        {
          n: "03",
          title: "Construção em entregas curtas",
          body:
            "Sprints de 1 a 2 semanas com deploy real em produção a cada ciclo. Você usa o sistema antes de pagar a próxima parcela.",
        },
        {
          n: "04",
          title: "Operação + handoff",
          body:
            "Após o go-live, suporte incluso por um mês e documentação completa para seu time, ou o próximo dev, tocar sozinho.",
        },
      ],
    },
    cases: {
      eyebrow: "Cases",
      title: "Sistemas que sustentam operação.",
      lede:
        "Cada projeto aqui começou em uma reunião de descoberta e terminou em deploy. Continuam operando hoje.",
      labels: {
        problem: "Contexto",
        solution: "Solução",
        result: "Impacto",
        stack: "Stack",
        status: "Status",
        live: "Acessar",
        repo: "Repositório",
        private: "Repositório privado",
        statusProduction: "Em produção",
        statusDevelopment: "Em desenvolvimento",
        statusDelivered: "Entregue",
      },
    },
    stack: {
      eyebrow: "Stack",
      title: "Ferramentas que uso — e o motivo.",
      lede:
        "Stack escolhida pela adequação ao problema. Cada peça resolve uma classe de questão recorrente em sistema interno de PME — e tem motivo técnico para estar aqui.",
      groups: [
        {
          title: "Frontend",
          items: ["Next.js", "React", "TypeScript", "Tailwind", "shadcn/ui"],
        },
        {
          title: "Backend",
          items: ["Node.js", "Fastify", "Laravel", "Java", "Spring Boot", "Prisma", "PostgreSQL", "Redis", "BullMQ"],
        },
        {
          title: "Integrações & Automação",
          items: ["n8n", "Meta Marketing API", "Google Ads API", "Bitrix24", "Gemini", "Claude", "GPT"],
        },
        {
          title: "Infra & DevOps",
          items: ["Docker", "Google Cloud", "BigQuery", "Vercel", "GitHub Actions"],
        },
      ],
    },
    cta: {
      eyebrow: "Próximo passo",
      title: "Conta o contexto. Eu volto com um caminho.",
      lede:
        "Diagnóstico de 30 minutos, sem custo. Se o problema for compatível com o que eu entrego, seguimos para escopo. Se não for, eu indico direção técnica na própria call.",
      primary: "Falar no WhatsApp",
      secondary: "Mandar e-mail",
      mailLabel: "isaacgfds@hotmail.com",
    },
    footer: {
      tagline: "Engenheiro de software · Construindo operação desde 2023",
      sections: {
        navigate: "Navegar",
        connect: "Conectar",
        legal: "Legal",
      },
      legal: {
        privacy: "Privacidade",
        terms: "Termos",
      },
      rights: "Todos os direitos reservados.",
      builtWith: "Construído com Next.js, hospedado na Vercel.",
    },
  },
  en: {
    nav: {
      services: "Services",
      cases: "Cases",
      method: "Process",
      stack: "Stack",
      contact: "Contact",
      cta: "Chat on WhatsApp",
    },
    hero: {
      eyebrow: "Software engineer · Brazil",
      titlePre: "I get companies",
      titleAccent: "out of the spreadsheet",
      titlePost: ".",
      lede:
        "I build internal SaaS, automations, and integrations from scratch. Database to button, API to dashboard — software that sustains the operation your business needs to grow on.",
      ctaPrimary: "Chat on WhatsApp",
      ctaSecondary: "See cases",
      socialProof: "Systems live in telecom, healthcare, marketing, and multi-branch operations.",
      badge: {
        label: "Shipping software since",
        year: "2023",
        note: "Software I built running across a regional ISP, a hospital clinic, and asset governance.",
      },
    },
    stats: {
      eyebrow: "Operation by the numbers",
      lede: "Every number here points to a system live in production.",
      items: [
        { value: "11", label: "cities served by the ISP whose storefront I built" },
        { value: "3", label: "years stitching systems, integrations, and data in production" },
        { value: "84", label: "automated tests on the clinical-management SaaS" },
        { value: "3", label: "external APIs unified into a single paid-traffic dashboard" },
      ],
    },
    marquee: {
      label: "Active stack",
    },
    about: {
      eyebrow: "Who I am",
      title: "I'm Isaac Fonseca.",
      paragraphs: [
        "Brazilian software engineer. I build internal SaaS, integrate APIs, automate operations with n8n, and work with hardware when the problem asks for it.",
        "Live in production since 2023. The systems I ship today run at a regional ISP in Bahia, at an ABA therapy clinic, on a paid-media performance team, and in multi-branch asset governance. Each one started in a discovery meeting and is still running.",
        "I work on three fronts: custom projects, focused technical consulting, and ongoing scope. Focus on SMBs and clinics that need software tailored to how their operation actually works. Remote, BRT timezone.",
      ],
      signature: "— Isaac · Brazil",
    },
    services: {
      eyebrow: "What I ship",
      title: "Five ways to pull your operation out of improvisation.",
      lede:
        "Each one solves a different kind of pain. Almost every project I deliver mixes two or three of them — because operational problems rarely live in one place.",
      items: [
        {
          icon: "saas",
          title: "Custom internal SaaS",
          body:
            "Software built for one specific business, with its rules baked into the code. Backend, frontend, database, deployment, and initial operations.",
        },
        {
          icon: "automation",
          title: "n8n automations",
          body:
            "Flows that connect systems you already pay for and remove repetitive work from the team. ETL, sync, alerts, conditional triggers.",
        },
        {
          icon: "api",
          title: "External API integrations",
          body:
            "Meta Marketing, Google Ads, Bitrix24, Google Cloud, BigQuery, Gemini, Claude, GPT. Rate-limit-resilient, normalized, audited.",
        },
        {
          icon: "hardware",
          title: "Hardware & monitoring",
          body:
            "Endpoint collection, server agents, equipment readouts. Inventory, live monitoring, and governance that talks to your system.",
        },
        {
          icon: "consulting",
          title: "Technical consulting",
          body:
            "Architecture diagnosis, stack review, migration plan, scope definition — before you open a vendor RFP. Charged hourly or in short packages.",
        },
      ],
    },
    pain: {
      eyebrow: "The problem",
      title: "Your operation runs on spreadsheets — and the bill is arriving.",
      lede:
        "The team copies data from one system to another. A report takes three days. Each branch does it their way. One human slip becomes a tax incident, a missing asset, a patient who never gets a callback.",
      points: [
        {
          title: "Spreadsheets have no owner.",
          body:
            "When everyone edits, nobody owns. Data drifts and you can't tell when, or who did what.",
        },
        {
          title: "Legacy systems don't talk.",
          body:
            "You pay for three SaaS that ignore each other. The same record gets retyped across three screens.",
        },
        {
          title: "Standards live in someone's memory.",
          body:
            "Without process baked into software, the standard depends on whoever's been there longest. When that person leaves, the standard leaves too.",
        },
      ],
    },
    method: {
      eyebrow: "Process",
      title: "Process before code.",
      lede:
        "I map the operation, design the flow the system will enforce, then pick the stack. Process designed first is what makes the system enter your team's daily routine and stay there.",
      steps: [
        {
          n: "01",
          title: "Diagnosis (30 min, free)",
          body:
            "Focused call. You describe the pain, I ask what matters. We leave with mutual clarity on whether to move forward.",
        },
        {
          n: "02",
          title: "Scope + clickable prototype",
          body:
            "Within 1–2 weeks: a clickable prototype and a fixed-scope, fixed-price proposal. Budgets are firm, not elastic.",
        },
        {
          n: "03",
          title: "Short delivery cycles",
          body:
            "1–2 week sprints with real production deploys each cycle. You use the software before paying the next installment.",
        },
        {
          n: "04",
          title: "Operate + handoff",
          body:
            "After go-live: one month of support included, plus full documentation so your team — or the next dev — can run it alone.",
        },
      ],
    },
    cases: {
      eyebrow: "Cases",
      title: "Systems that hold up operations.",
      lede:
        "Each project here started in a discovery meeting and ended in a deploy. They're still running.",
      labels: {
        problem: "Context",
        solution: "Solution",
        result: "Impact",
        stack: "Stack",
        status: "Status",
        live: "Visit",
        repo: "Repository",
        private: "Private repo",
        statusProduction: "In production",
        statusDevelopment: "In development",
        statusDelivered: "Delivered",
      },
    },
    stack: {
      eyebrow: "Stack",
      title: "Tools I use — and why.",
      lede:
        "Stack chosen by fit to the problem. Each piece solves a recurring question in SMB internal systems — and has a technical reason to be here.",
      groups: [
        {
          title: "Frontend",
          items: ["Next.js", "React", "TypeScript", "Tailwind", "shadcn/ui"],
        },
        {
          title: "Backend",
          items: ["Node.js", "Fastify", "Laravel", "Java", "Spring Boot", "Prisma", "PostgreSQL", "Redis", "BullMQ"],
        },
        {
          title: "Integrations & Automation",
          items: ["n8n", "Meta Marketing API", "Google Ads API", "Bitrix24", "Gemini", "Claude", "GPT"],
        },
        {
          title: "Infra & DevOps",
          items: ["Docker", "Google Cloud", "BigQuery", "Vercel", "GitHub Actions"],
        },
      ],
    },
    cta: {
      eyebrow: "Next step",
      title: "Share the context. I'll come back with a path.",
      lede:
        "30-minute diagnosis, no cost. If the problem fits what I deliver, we move to scope. If it doesn't, I'll point you in the right technical direction on the call itself.",
      primary: "Chat on WhatsApp",
      secondary: "Send email",
      mailLabel: "isaacgfds@hotmail.com",
    },
    footer: {
      tagline: "Software engineer · Building operations since 2023",
      sections: {
        navigate: "Navigate",
        connect: "Connect",
        legal: "Legal",
      },
      legal: {
        privacy: "Privacy",
        terms: "Terms",
      },
      rights: "All rights reserved.",
      builtWith: "Built with Next.js, hosted on Vercel.",
    },
  },
} as const;

export type Dictionary = (typeof dictionary)[Locale];
