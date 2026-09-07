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
    period: 'Aug 2025 – Present',
    location: 'Chennai, India',
    isCurrent: true,
    summary: 'Building LLM-powered agent and retrieval systems while leading backend development across Java and Spring Boot microservices.',
    highlights: [
      'Architecting and implementing agentic retrieval pipelines and AI systems integration',
      'Designing robust backend microservices, API contracts, and high-performance server architectures',
      'Overseeing service resilience, state management, and reliable distributed workflows'
    ]
  },
  {
    id: 'tcs-software-engineer',
    company: 'Tata Consultancy Services',
    role: 'Software Engineer',
    period: 'Apr 2024 – Aug 2025',
    location: 'Chennai, India',
    isCurrent: false,
    summary: 'Built and optimized full-stack and backend systems using Spring Boot, React, PostgreSQL, Redis and enterprise APIs.',
    highlights: [
      'Developed core backend services and microservice endpoints with Spring Boot and PostgreSQL',
      'Implemented caching strategies using Redis for latency reduction and throughput optimization',
      'Engineered clean RESTful API contracts and full-stack integration workflows'
    ]
  }
]
