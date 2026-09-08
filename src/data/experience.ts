export interface ExperienceItem {
  id: string
  company: string
  role: string
  period: string
  location: string
  isCurrent: boolean
  summary: string
  highlights?: string[]
}

export const experiences: ExperienceItem[] = [
  {
    id: 'tcs-system-engineer',
    company: 'Tata Consultancy Services',
    role: 'System Engineer',
    period: 'Apr 2024 – Present',
    location: 'Chennai, India',
    isCurrent: true,
    summary: 'Working across AI systems and backend engineering — building LLM-powered agent and retrieval systems alongside Java/Spring Boot services, enterprise APIs and performance-critical backend systems.',
    highlights: [
      'Architecting and implementing LLM-powered agentic retrieval pipelines and AI systems integration',
      'Designing and developing core backend microservices, REST APIs, and high-performance server architectures with Java and Spring Boot',
      'Implementing caching strategies using Redis and relational data modeling with PostgreSQL for latency reduction and throughput optimization',
      'Overseeing service resilience, state management, Docker containerization, CI/CD pipelines, and reliable distributed workflows'
    ]
  }
]
