export interface ProjectMetric {
  label: string
  value: string
  description?: string
}

export interface ProjectSectionDetail {
  title: string
  content: string
  items?: string[]
}

export interface ProjectCardArea {
  title: string
  description: string
  tag?: string
}

export interface ProjectLesson {
  number: string
  title: string
  takeaway: string
}

export interface Project {
  id: string
  slug: string
  number: string
  name: string
  subtitle: string
  description: string
  tags: string[]
  status: string
  githubUrl?: string
  liveUrl?: string
  accentColor: string
  heroIntro: string
  overview: string
  overviewPoints?: string[]
  coreAreas?: ProjectCardArea[]
  architecturePhilosophy?: {
    summary: string
    quote: string
    details: string[]
  }
  lessons?: ProjectLesson[]
  capabilities?: string[]
  architectureAreas?: string[]
  sections?: ProjectSectionDetail[]
  engineeringChallenges?: string[]
  techStack: string[]
  metrics?: ProjectMetric[]
}

export const projects: Project[] = [
  {
    id: 'natasha',
    slug: 'natasha',
    number: '01',
    name: 'Natasha',
    subtitle: 'Autonomous Executive Intelligence',
    description: "An AI system I'm building to understand how an agent can carry a goal through the messy real world — including when plans fail and reality changes underneath it.",
    tags: [
      'Planning',
      'Memory',
      'Tool Use',
      'Browser',
      'World State',
      'Recovery',
      'LLMs',
      'Python'
    ],
    status: 'Active development',
    accentColor: '#7C8CFF',
    heroIntro: "The hard part isn't getting an LLM to make a plan. It's getting the system to keep going when reality stops matching that plan.",
    overview: 'Natasha is an autonomous AI systems project exploring how an intelligent software system can move beyond conversational prompts and operate through goal understanding, planning, capability and tool use, memory, browser interaction, execution, observations, world state, recovery and completion verification.',
    overviewPoints: [
      'Accepting high-level user goals and decomposing them into structured intent',
      'Maintaining coherent situational context and structured world state across turns',
      'Deciding next best actions through hybrid planning and reasoning heuristics',
      'Selecting and executing local capabilities, browser automation, and system tools',
      'Observing runtime execution results, diffing world state, and detecting anomalies',
      'Maintaining persistent working, session, and long-term memory across sessions',
      'Recovering from unexpected tool errors or execution hurdles with dynamic replanning',
      'Continuing until the goal is completed with verifiable evidence or safely suspended'
    ],
    coreAreas: [
      {
        title: 'Cognitive Planning',
        description: 'Hierarchical goal decomposition, task sequencing, and dynamic plan re-evaluation based on runtime feedback.',
        tag: 'Reasoning'
      },
      {
        title: 'Tool Orchestration',
        description: 'Dynamic schema-driven capability selection, argument verification, and deterministic execution isolation.',
        tag: 'Execution'
      },
      {
        title: 'Memory Systems',
        description: 'Multi-tiered storage balancing ephemeral working context, episodic session memories, and persistent knowledge.',
        tag: 'State'
      },
      {
        title: 'Browser Automation',
        description: 'DOM perception, semantic element addressing, SPA route handling, and resilient web interaction workflows.',
        tag: 'Perception'
      },
      {
        title: 'Search & Ingestion',
        description: 'Targeted web retrieval, unstructured document ingestion, and context compression for ground-truth discovery.',
        tag: 'Retrieval'
      },
      {
        title: 'Filesystem & Local Runtime',
        description: 'Safe sandboxed workspace operations, structured file manipulation, and artifact lifecycle management.',
        tag: 'Runtime'
      },
      {
        title: 'World State Tracking',
        description: 'Explicit environment modeling that records entities, devices, network state, and tool outputs over time.',
        tag: 'State'
      },
      {
        title: 'Device Runtime',
        description: 'Host-level capability bridging, peripheral awareness, and structured operating system integration contracts.',
        tag: 'System'
      },
      {
        title: 'Execution & Recovery',
        description: 'Deterministic error containment, retry strategies, backtracking logic, and graceful failure escalation.',
        tag: 'Resilience'
      },
      {
        title: 'Evidence & Completion',
        description: 'Validation criteria verification, output assertion, and structured audit trails proving goal completion.',
        tag: 'Verification'
      }
    ],
    architecturePhilosophy: {
      summary: 'Separation of semantic reasoning and deterministic runtime control.',
      quote: 'The language model provides semantic reasoning, while deterministic runtime components manage execution, policy, state, capability routing, proof and reliability.',
      details: [
        'Model-Agnostic Core: The system is intentionally designed to be model-agnostic rather than tightly coupled to one specific LLM provider.',
        'Runtime Guarantees: All critical side-effects, permissions, and tool validations are enforced by deterministic code outside the model context.',
        'Auditable State: Every state mutation produces a structured event log enabling full replay, debugging, and post-execution inspection.'
      ]
    },
    lessons: [
      {
        number: '01',
        title: 'THE PLANNER BECAME PART OF THE PROBLEM',
        takeaway: 'Every new failure makes it tempting to add another recovery rule, validation step or prompt. Eventually the more useful question became: What actually requires model reasoning, and what should simply be reliable, deterministic runtime behavior?'
      },
      {
        number: '02',
        title: 'A PLAN IS NOT PROOF',
        takeaway: 'A model saying an action worked doesn\'t make it true. The runtime still has to observe what actually happened, preserve the new state, and determine whether the goal genuinely moved forward.'
      },
      {
        number: '03',
        title: 'MORE CONTEXT ISN\'T ALWAYS MORE INTELLIGENCE',
        takeaway: 'Long prompts, accumulated observations and repeated planning calls can make an agent slower, more expensive and harder to reason about. A recurring design problem is deciding what the model actually needs to see, and what the system should manage without asking it.'
      },
      {
        number: '04',
        title: 'OBSERVATIONS OVER MODEL ASSUMPTIONS',
        takeaway: 'Execution success must be verified from concrete environmental observations, not assumed from model output or optimistic execution paths.'
      },
      {
        number: '05',
        title: 'CLEAR BOUNDARIES BETWEEN REASONING & RUNTIME',
        takeaway: 'Model reasoning and deterministic runtime responsibilities need strict boundaries. Side effects, safety policies, and state transitions belong strictly in the runtime harness.'
      },
      {
        number: '06',
        title: 'REALITY INVALIDATES CLEAN PLANS',
        takeaway: 'Browser state, asynchronous network events, and dynamic application behaviors can invalidate otherwise reasonable plans at any step, demanding resilient recovery over rigid execution.'
      }
    ],
    engineeringChallenges: [
      'Maintaining continuity and causal coherence across long-running, multi-step goals',
      'Preventing planner/runtime responsibility overlap by strictly bounding prompt autonomy',
      'Grounding actions in actual observations rather than hallucinated execution state',
      'Recovering gracefully from unexpected third-party runtime and API execution failures',
      'Preserving stable entity, tool schema, and device identity throughout state transitions',
      'Controlling token usage, context bloat, and memory decay over extended execution traces',
      'Handling asynchronous browser state, dynamic DOM updates, and complex SPA applications',
      'Verifying objectively whether non-deterministic actions actually succeeded before progressing'
    ],
    techStack: [
      'Python',
      'LLMs',
      'Playwright',
      'PostgreSQL',
      'Docker',
      'REST APIs',
      'Agentic Architecture',
      'RAG',
      'Browser Automation'
    ]
  },
  {
    id: 'echo',
    slug: 'echo',
    number: '02',
    name: 'Echo',
    subtitle: 'Conversational Voice & Messaging AI Agent',
    description: "Voice AI feels magical until someone has to wait awkwardly for it to answer. Echo is my attempt at making that interaction feel more natural.",
    tags: [
      'Voice AI',
      'RAG',
      'STT',
      'TTS',
      'Streaming',
      'Python',
      'Automation'
    ],
    status: 'In Active Development',
    githubUrl: 'https://github.com/Sarath-Sivakumar/agent-echo',
    accentColor: '#A78BFA',
    heroIntro: 'Voice AI looks deceptively simple until latency becomes part of the conversation. A correct answer that arrives after an awkward silence still feels broken.',
    overview: 'Echo is a conversational AI system designed for multi-channel interaction across WhatsApp and Telegram, speech processing, domain-grounded retrieval, tool dispatch, and automated business workflows. End-to-end messaging and audio voice note pipelines are operational, with real-time telephone calling currently under active development.',
    capabilities: [
      'Telegram text messages and voice notes with end-to-end processing',
      'WhatsApp text messages and audio voice note support',
      'Speech-to-Text (STT) audio transcription pipeline',
      'LLM response generation with domain context grounding',
      'Text-to-Speech (TTS) streaming synthesis',
      'Retrieval-grounded responses utilizing domain-specific knowledge bases',
      'Automated business knowledge ingestion and semantic document chunking',
      'Tool-driven actions including CRM updates and external API dispatch',
      'Real-time telephone calling integration (under active development)'
    ],
    architectureAreas: [
      'Telegram & WhatsApp Webhook Ingestion',
      'Speech-to-Text (STT) Audio Processing',
      'LLM Reasoning & Dialogue Management',
      'Retrieval-Augmented Generation (RAG) Engine',
      'Tool Integration & Backend Action Dispatch',
      'Text-to-Speech (TTS) Audio Synthesis',
      'Real-Time Telephony Pipeline (In Progress)'
    ],
    techStack: [
      'Python',
      'LLMs',
      'RAG',
      'STT',
      'TTS',
      'Streaming',
      'Docker',
      'REST APIs'
    ]
  },
  {
    id: 'debug-pilot',
    slug: 'debug-pilot',
    number: '03',
    name: 'Debug Pilot',
    subtitle: 'AI-Powered Spring Boot Debugging Agent',
    description: "Debugging isn't hard because exceptions are invisible. It's hard because the useful clue is usually buried somewhere else. Debug Pilot uses retrieval and contextual reasoning to help surface the part actually worth investigating.",
    tags: [
      'Agentic AI',
      'Spring Boot',
      'FastAPI',
      'React',
      'LLMs',
      'RAG',
      'Developer Tools'
    ],
    status: 'Completed POC',
    githubUrl: 'https://github.com/Sarath-Sivakumar/debug-pilot-agent',
    accentColor: '#60A5FA',
    heroIntro: "Most developers don't need another tool that tells them an exception exists. They need something that can understand the surrounding failure and point them toward what is actually worth investigating.",
    overview: 'Debug Pilot addresses the friction of troubleshooting complex Java / Spring Boot application errors by parsing stack traces, analyzing dependency injection graphs, and querying an indexed corpus of known failure signatures using a structured Plan → Execute → Reflect → Diagnose loop with session memory and diagnostic observability.',
    architectureAreas: [
      'React Dashboard (User Interface & Interaction)',
      'FastAPI Gateway & Session Orchestrator',
      'Planner & Diagnostic Strategy Engine',
      'Executor & Tool Calling Runtime',
      'Reflector & Solution Validation Loop',
      'Responder & Remediation Code Diff Generator',
      'Session Memory & Diagnostic Observability'
    ],
    metrics: [
      {
        label: 'Failure Patterns Indexed',
        value: '100+',
        description: 'Curated Spring Boot startup, runtime, and configuration failure templates'
      },
      {
        label: 'Diagnostic Latency',
        value: '< 3s',
        description: 'End-to-end analysis from trace ingestion to structured remediation'
      },
      {
        label: 'Investigation Effort Reduction',
        value: '~60%',
        description: 'Measured decrease in manual stack trace search and dependency triaging'
      }
    ],
    sections: [
      {
        title: 'Problem',
        content: 'Spring Boot exceptions often produce deep, obscure stack traces spanning tens of framework layers (BeanCreationException, UnsatisfiedDependencyException, circular references). Developers spend valuable time parsing boilerplate logs and searching forums for recurring configuration pitfalls.'
      },
      {
        title: 'Diagnostic Pipeline',
        content: 'Debug Pilot decomposes debugging into a structured four-stage agentic loop: Plan (assess failure modality and plan diagnostic queries) → Execute (retrieve knowledge chunks and inspect dependency graph) → Reflect (critique hypothesis and verify against error constraints) → Diagnose (synthesize root cause and exact remediation patch).'
      },
      {
        title: 'System Architecture',
        content: 'The system is architected with a React frontend dashboard connected to a FastAPI backend. The core runtime comprises a central Orchestrator coordinating specialized sub-modules: Planner, Executor, Reflector, and Responder, backed by session memory and full diagnostic trace observability.'
      },
      {
        title: 'Retrieval Pipeline',
        content: 'Ingested stack traces and environment metadata are parsed into structured fault vectors. A specialized semantic index matches the error topology against documented solutions, framework migration guides, and dependency matrix constraints.'
      },
      {
        title: 'Developer Experience',
        content: 'Designed with a clean, low-latency web UI that accepts raw logs or log files, rendering syntax-highlighted solutions, root-cause summaries, and copy-pasteable configuration snippets.'
      },
      {
        title: 'Results',
        content: 'Demonstrated highly effective across complex Spring Boot startup and runtime scenarios, accelerating diagnosis and saving significant developer triage time.'
      }
    ],
    techStack: [
      'FastAPI',
      'Python',
      'React',
      'TypeScript',
      'LLMs',
      'RAG',
      'Spring Boot'
    ]
  }
]
