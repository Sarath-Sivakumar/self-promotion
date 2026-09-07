export interface ExpertiseItem {
  id: string
  title: string
  description: string
  icon: string
  tags?: string[]
}

export interface SkillCategory {
  category: string
  description?: string
  skills: string[]
}

export const expertiseAreas: ExpertiseItem[] = [
  {
    id: 'ai-systems',
    title: 'AI Systems',
    description: 'Autonomous agents, agent architecture, planning, reasoning pipelines, tool orchestration, reflection, runtime systems and multi-step execution.',
    icon: 'Bot',
    tags: ['Autonomous Agents', 'Planning', 'Tool Orchestration', 'Reflection']
  },
  {
    id: 'retrieval-memory',
    title: 'Retrieval & Memory',
    description: 'RAG, embeddings, semantic retrieval, context engineering, working/session/long-term memory, knowledge pipelines and grounding.',
    icon: 'Brain',
    tags: ['RAG', 'Vector Search', 'Context Engineering', 'State Memory']
  },
  {
    id: 'backend-engineering',
    title: 'Backend Engineering',
    description: 'Java, Spring Boot, Python, FastAPI, REST APIs, microservices, PostgreSQL, Redis and production backend systems.',
    icon: 'Server',
    tags: ['Java', 'Spring Boot', 'Python', 'FastAPI', 'PostgreSQL']
  },
  {
    id: 'browser-automation',
    title: 'Browser & Automation',
    description: 'Playwright, DOM reasoning, SPA automation, browser workflows, capability routing and autonomous web interaction.',
    icon: 'Globe',
    tags: ['Playwright', 'DOM Analysis', 'SPA Routing', 'Web Drivers']
  },
  {
    id: 'ai-infrastructure',
    title: 'AI Infrastructure',
    description: 'Docker, CI/CD, cloud deployment, model integration, evaluation, inference workflows and observability.',
    icon: 'Cpu',
    tags: ['Docker', 'Inference', 'CI/CD', 'Model Ops']
  },
  {
    id: 'system-design',
    title: 'System Design',
    description: 'Distributed systems, reliability, state management, recovery, architecture contracts, performance and scalable service design.',
    icon: 'Network',
    tags: ['Distributed Systems', 'State Machines', 'Resilience', 'API Contracts']
  }
]

export const skillCategories: SkillCategory[] = [
  {
    category: 'AI & Machine Intelligence',
    skills: [
      'LLMs',
      'RAG',
      'LangChain',
      'LangGraph',
      'OpenAI',
      'Anthropic',
      'Gemini',
      'Ollama',
      'Embeddings',
      'Structured Outputs',
      'Tool Calling'
    ]
  },
  {
    category: 'Backend & Distributed Systems',
    skills: [
      'Java',
      'Spring Boot',
      'Python',
      'FastAPI',
      'REST APIs',
      'Microservices',
      'WebSockets',
      'PostgreSQL',
      'Redis'
    ]
  },
  {
    category: 'Browser & Automation',
    skills: [
      'Playwright',
      'Browser Automation',
      'DOM Analysis',
      'Workflow Automation'
    ]
  },
  {
    category: 'Infrastructure & DevOps',
    skills: [
      'Docker',
      'AWS',
      'Azure',
      'Jenkins',
      'GitHub Actions',
      'Linux',
      'CI/CD'
    ]
  }
]

export const focusAreas: string[] = [
  'Autonomous AI Agents',
  'Agentic AI',
  'LLM Applications',
  'AI Systems Architecture',
  'Backend Engineering',
  'System Design',
  'RAG & Retrieval',
  'Memory Systems',
  'Tool Orchestration',
  'Browser Automation',
  'Voice AI',
  'Distributed Systems'
]
