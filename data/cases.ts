import type { Locale } from "./dictionary";

export type CaseStatus = "production" | "development" | "delivered";

export interface BilingualText {
  pt: string;
  en: string;
}

export interface CaseStudy {
  id: string;
  /** Título exibido em ambos idiomas (nomes próprios não mudam). */
  title: string;
  year: number;
  status: CaseStatus;
  domain: BilingualText;
  /** Frase curta exibida no card resumido. */
  summary: BilingualText;
  problem: BilingualText;
  solution: BilingualText;
  result: BilingualText;
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  /** Link para post/case externo (ex.: LinkedIn com prints). */
  caseUrl?: string;
  /** Marca cases com briefing ainda incompleto — vão renderizar com aviso. */
  draft?: boolean;
  /** Cases featured aparecem em formato editorial grande. Os demais como cards compactos. */
  featured: boolean;
  /** Cor que identifica o case nos mockups e marcadores. Hex completo. */
  accent: string;
  /** Tipo de mockup visual a renderizar ao lado do case. */
  mockup:
    | { kind: "browser"; preview: BrowserPreview }
    | { kind: "device"; preview: DevicePreview }
    | { kind: "dashboard"; preview: DashboardPreview }
    | { kind: "flow"; preview: FlowPreview };
}

export interface BrowserPreview {
  /** Domínio falso/real exibido na barra do mockup. */
  domain: string;
  /** Lista de tags/chips exibidas como conteúdo simulado. */
  chips: string[];
  /** Linha de título dentro do "site". */
  heading: string;
  /** Subtítulo dentro do "site". */
  sub: string;
}

export interface DevicePreview {
  /** Frase grande no "celular". */
  heading: string;
  /** Itens simulando lista do app. */
  items: { label: string; meta: string }[];
}

export interface DashboardPreview {
  /** Métricas grandes (KPIs). */
  kpis: { label: string; value: string }[];
  /** Série de barras (alturas 0–100). */
  bars: number[];
}

export interface FlowPreview {
  /** Nós do fluxo, na ordem de leitura. */
  nodes: string[];
}

export function pickText(text: BilingualText, locale: Locale) {
  return text[locale];
}

export const cases: CaseStudy[] = [
  // ---------------------------------------------------------------------------
  // 1. CONTROLE DE EQUIPAMENTOS — case viral do LinkedIn, gerou lead SmartSuite
  // ---------------------------------------------------------------------------
  {
    id: "controle-equipamentos",
    title: "Controle de Equipamentos",
    year: 2026,
    status: "delivered",
    featured: true,
    accent: "#0052FF",
    domain: { pt: "Governança de ativos · RH", en: "Asset governance · HR" },
    summary: {
      pt: "SaaS de inventário que força o processo de RH, em vez de só registrar planilha.",
      en: "Asset inventory SaaS that enforces HR process — instead of just logging a spreadsheet.",
    },
    problem: {
      pt: "Empresa com múltiplas filiais perdia equipamento toda vez que alguém era desligado. O TI só descobria meses depois, quando o ex-funcionário pedia o termo de quitação. Cada filial usava uma planilha diferente, nenhuma falava com RH.",
      en: "A multi-branch company lost equipment every time someone left. IT only noticed months later, when the ex-employee asked for the release form. Each branch used a different spreadsheet — none talked to HR.",
    },
    solution: {
      pt: "Construí um SaaS onde o termo de desligamento de RH dispara obrigatoriamente o retorno do equipamento ao TI antes da reatribuição. Sem cumprir o fluxo, o sistema trava — governança virou código, não política em PDF.",
      en: "I built a SaaS where HR's offboarding form mandatorily triggers the equipment return to IT before any reassignment. The system blocks any shortcut — governance became code, not a PDF policy.",
    },
    result: {
      pt: "Padronização de processo entre filiais e zero ativo perdido em desligamento. O post contando o case viralizou no LinkedIn e gerou contato direto de fundador de SaaS brasileiro de ITAM para freela.",
      en: "Process standardized across branches, zero asset lost on offboarding. A LinkedIn post telling the story went viral and triggered a direct inbound from a Brazilian ITAM SaaS founder.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind", "Node.js", "PostgreSQL", "Prisma"],
    caseUrl:
      "https://www.linkedin.com/posts/isaac-fonseca-17a785223_engenhariadesoftware-gestaodeativos-saas-activity-7459667799653638144-HoJZ",
    mockup: {
      kind: "dashboard",
      preview: {
        kpis: [
          { label: "Ativos rastreados", value: "1.284" },
          { label: "Filiais", value: "07" },
          { label: "Perda em desligamento", value: "0%" },
        ],
        bars: [42, 58, 71, 64, 78, 88, 96],
      },
    },
  },

  // ---------------------------------------------------------------------------
  // 2. TUXNET — LANDING DE VENDAS ISP, BAHIA (em produção desde 2025)
  // ---------------------------------------------------------------------------
  {
    id: "tuxnet",
    title: "Tuxnet",
    year: 2025,
    status: "production",
    featured: true,
    accent: "#0052FF",
    domain: { pt: "Telecom · Web de vendas", en: "Telecom · Sales web" },
    summary: {
      pt: "Vitrine de vendas do provedor de fibra que atende 11 cidades da Bahia.",
      en: "Sales front-door for a fiber ISP serving 11 cities across Bahia, Brazil.",
    },
    problem: {
      pt: "Provedor regional baiano disputava cliente com gigantes nacionais — e o site antigo não passava confiança nem comparava planos. Lead chegava direto no WhatsApp sem qualificação, atendimento se afogava, conversão dependia do humor do dia.",
      en: "A regional ISP in Bahia was competing with national carriers — the old site neither inspired trust nor let visitors compare plans. Leads landed straight on WhatsApp without qualification, support was overwhelmed, conversion depended on someone's mood that day.",
    },
    solution: {
      pt: "Landing institucional + vitrine comercial: carousel de campanha, três tiers de planos residenciais (350/550/750 Mbps), monte-seu-plano customizável, mapa de cobertura das 11 cidades atendidas, download do app móvel e WhatsApp pré-qualificado por plano escolhido. Construído em Laravel + Blade com MySQL — escolha por previsibilidade de hospedagem e custo operacional.",
      en: "Institutional landing + commercial showcase: campaign carousel, three residential tiers (350/550/750 Mbps), build-your-own-plan, coverage map for the 11 served cities, mobile app download, and WhatsApp pre-qualified by plan choice. Built on Laravel + Blade with MySQL — chosen for hosting predictability and operating cost.",
    },
    result: {
      pt: "Em produção desde 2025 como vitrine principal do provedor. Lead chega no WhatsApp já com plano escolhido, o que muda a conversa de \"o que é fibra?\" para \"quando instala?\".",
      en: "Live since 2025 as the ISP's main storefront. Leads now hit WhatsApp with a plan already chosen — shifting the conversation from \"what is fiber?\" to \"when can you install?\".",
    },
    stack: ["Laravel", "Blade", "JavaScript", "MySQL", "Tailwind"],
    liveUrl: "https://www.redetuxnet.com.br",
    mockup: {
      kind: "browser",
      preview: {
        domain: "redetuxnet.com.br",
        heading: "Fibra que conecta a Bahia.",
        sub: "11 cidades · 350, 550 e 750 Mbps",
        chips: ["R$ 69,99", "R$ 79,99", "R$ 89,99", "Monte seu plano"],
      },
    },
  },

  // ---------------------------------------------------------------------------
  // 4. DASHBOARD TRÁFEGO PAGO — placeholder até briefing completo
  // ---------------------------------------------------------------------------
  {
    id: "trafego-dashboard",
    title: "Dashboard de Tráfego com IA",
    year: 2026,
    status: "delivered",
    featured: true,
    accent: "#0052FF",
    domain: {
      pt: "Marketing · Dashboard + IA copilot",
      en: "Marketing · Dashboard + AI copilot",
    },
    summary: {
      pt: "Google Ads, Meta Ads e CRM Bitrix24 num painel só — com Claude e GPT analisando campanha em tempo real.",
      en: "Google Ads, Meta Ads, and Bitrix24 CRM in one dashboard — with Claude and GPT analyzing campaigns in real time.",
    },
    problem: {
      pt: "Time de performance vivia em três telas: Google Ads de um lado, Meta Business Manager de outro, Bitrix24 num terceiro. O lead chegava num canal, convertia em outro, era atendido em um terceiro — e ninguém conseguia enxergar a jornada inteira. CPL e CAC eram chute educado, não dado. Relatório semanal demorava o dia inteiro do gestor de tráfego.",
      en: "The performance team lived across three screens: Google Ads in one tab, Meta Business Manager in another, Bitrix24 in a third. Leads landed on one channel, converted on another, were handled on a third — nobody could see the full journey. CPL and CAC were educated guesses, not data. Weekly reports ate up the traffic manager's entire day.",
    },
    solution: {
      pt: "Pipeline n8n orquestrando coleta diária das APIs (Google Ads, Meta Marketing, Bitrix24), normalização das métricas em BigQuery e dashboard React + TypeScript no Cloud Run. Em cima do dado, dupla de IA — Claude + GPT — atuando como copiloto: gera relatório semanal acionável e responde em chat sobre oscilações de CPL, comparativos por campanha e sugestões de remanejo de verba.",
      en: "n8n pipeline orchestrating daily API collection (Google Ads, Meta Marketing, Bitrix24), metric normalization in BigQuery, and a React + TypeScript dashboard on Cloud Run. On top of the data, a dual-AI layer — Claude + GPT — acting as copilot: it ships an actionable weekly report and answers chat queries on CPL drift, per-campaign comparisons, and budget reallocation suggestions.",
    },
    result: {
      pt: "Trabalho manual com planilha eliminado. Decisão de tráfego passou a ser baseada em CPL e CAC reais, comparados entre canais. A IA virou copiloto estratégico — o time pergunta no chat o que costumava virar reunião de uma hora.",
      en: "Manual spreadsheet work gone. Traffic decisions are now driven by real CPL and CAC, compared across channels. The AI became the team's strategic copilot — what used to be an hour-long meeting is now a chat question.",
    },
    stack: [
      "React",
      "TypeScript",
      "Cloud Run",
      "BigQuery",
      "n8n",
      "Google Ads API",
      "Meta Marketing API",
      "Bitrix24",
      "Claude",
      "GPT",
    ],
    caseUrl:
      "https://www.linkedin.com/posts/isaac-fonseca-17a785223_react-typescript-googlecloud-activity-7463973946871263232-xZfb",
    mockup: {
      kind: "dashboard",
      preview: {
        kpis: [
          { label: "CPL blended", value: "R$ 42" },
          { label: "CAC mês", value: "R$ 312" },
          { label: "Leads / mês", value: "1.847" },
        ],
        bars: [28, 41, 36, 52, 48, 64, 71, 67, 84, 92],
      },
    },
  },

  // ---------------------------------------------------------------------------
  // 5. PLATAFORMA CLÍNICA TEA — sistema confidencial em uso ativo
  // ---------------------------------------------------------------------------
  {
    id: "clinical-tea",
    title: "Plataforma Clínica TEA",
    year: 2026,
    status: "production",
    featured: true,
    accent: "#0052FF",
    domain: {
      pt: "Saúde · Clínica especializada (confidencial)",
      en: "Healthcare · Specialized clinic (confidential)",
    },
    summary: {
      pt: "Sistema completo para clínica de terapia ABA — agenda, prontuário, PEI e avaliações num lugar só.",
      en: "Complete platform for an ABA therapy clinic — scheduling, records, PEI and assessments in one place.",
    },
    problem: {
      pt: "Clínica especializada em terapia ABA operava com planilha de agenda, prontuário em papel e controle de PEI em pasta separada. Toda informação clínica vivia desconectada, sem auditoria, sem rastreabilidade longitudinal por paciente e sem governança LGPD para dado de criança vulnerável.",
      en: "An ABA therapy clinic was running on spreadsheet schedules, paper records, and separate PEI binders. Clinical data lived disconnected — no audit trail, no longitudinal patient tracking, no LGPD-compliant handling of sensitive minor data.",
    },
    solution: {
      pt: "Plataforma própria com agenda multi-terapeuta protegida contra duplo agendamento por lock em banco, prontuário clínico com auditoria total, PEI único e ativo por paciente, autenticação de sessão com TTL configurável e CPF criptografado por HMAC + AES desde o cadastro. Backend Laravel + Postgres com índices únicos parciais e transações com lockForUpdate em todo ponto sensível. Frontend React feature-based com React Query, Zustand e proteção de rota por ability. Módulo de faturamento desenhado em blueprint e em roadmap.",
      en: "Custom platform with multi-therapist scheduling protected against double-booking via DB locks, audited clinical records, single-active PEI per patient, session auth with configurable TTL, and CPF encrypted via HMAC + AES at intake. Laravel + Postgres backend with partial unique indexes and lockForUpdate transactions on every sensitive write. Feature-based React frontend with React Query, Zustand, ability-based route guards. Billing module designed in blueprint and on the roadmap.",
    },
    result: {
      pt: "Em uso ativo pela clínica. Terapeutas marcam agenda, registram sessão clínica e atualizam PEI direto no sistema. Planilha de agenda, prontuário em papel e caderno de PEI saíram da rotina diária.",
      en: "Live at the clinic. Therapists book appointments, log clinical sessions, and update PEI directly in the system. Schedule spreadsheets, paper records, and PEI binders are out of the daily routine.",
    },
    stack: ["Laravel", "PHP", "PostgreSQL", "Sanctum", "React", "TypeScript", "React Query", "Zustand", "Tailwind"],
    mockup: {
      kind: "browser",
      preview: {
        domain: "clinica.interno",
        heading: "Agenda · Terapeuta",
        sub: "12 sessões hoje · Sala 03",
        chips: ["Sessão ABA", "PEI ativo", "Avaliação", "Documentos"],
      },
    },
  },
];

export const featuredCases = cases.filter((c) => c.featured);
export const secondaryCases = cases.filter((c) => !c.featured);
