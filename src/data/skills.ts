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
    description: 'How models, tools, state and runtime logic work together when the system has to do more than produce an answer.',
    icon: 'Bot',
    tags: ['Autonomous Agents', 'Planning', 'Tool Orchestration', 'Reflection']
  },
  {
    id: 'backend-engineering',
    title: 'Backend Engineering',
    description: 'The boring-but-important machinery that keeps everything alive — APIs, services, databases, performance and reliability.',
    icon: 'Server',
    tags: ['Java', 'Spring Boot', 'Python', 'FastAPI', 'PostgreSQL']
  },
  {
    id: 'retrieval-memory',
    title: 'Retrieval & Memory',
    description: 'Helping systems remember the right thing without drowning the model in context.',
    icon: 'Brain',
    tags: ['RAG', 'Vector Search', 'Context Engineering', 'State Memory']
  },
  {
    id: 'system-design',
    title: 'System Design',
    description: 'State, failures, recovery, reliability and all the things architecture diagrams conveniently ignore.',
    icon: 'Network',
    tags: ['Distributed Systems', 'State Machines', 'Resilience', 'API Contracts']
  },
  {
    id: 'browser-automation',
    title: 'Browser & Automation',
    description: 'Getting software to interact with real applications where the page rarely behaves exactly like the plan expected.',
    icon: 'Globe',
    tags: ['Playwright', 'DOM Analysis', 'SPA Routing', 'Web Drivers']
  },
  {
    id: 'ai-infrastructure',
    title: 'AI Infrastructure',
    description: 'Model integration, deployment, observability, CI/CD and the engineering around getting AI systems to run reliably.',
    icon: 'Cpu',
    tags: ['Docker', 'Inference', 'CI/CD', 'Model Ops']
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
