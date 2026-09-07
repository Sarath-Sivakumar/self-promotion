export interface Article {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
  status: 'published' | 'draft'
  readTime?: string
  content?: string
}

export const articles: Article[] = [
  {
    slug: 'why-ai-agents-need-world-state',
    title: 'Why AI Agents Need World State',
    description: 'Why stateless prompt wrappers fail on multi-step execution and how explicit world state modeling provides reliable ground truth.',
    date: 'Coming soon',
    tags: ['Agentic AI', 'Architecture'],
    status: 'draft',
    readTime: '6 min read',
    content: `## The Illusion of Pure Context

Many agent frameworks attempt to treat conversation context as a substitute for actual world state. In practice, feeding unbounded raw observations into a single prompt window leads to context degradation, hallucinated intermediate states, and lost causality over extended runs.

### What Is World State?

World state is an explicit, structured representation of the environment the agent is interacting with:
- Entity registries (files created, tabs opened, database rows mutated)
- Device and network availability
- Authoritative execution history and diffs
- Verification checkpoints

### Deterministic State vs. Semantic Reasoning

The model should reason about *what* to do based on the current state, but the runtime harness must remain the single source of truth for *what actually happened*.`
  },
  {
    slug: 'planner-vs-harness',
    title: 'Planner vs Harness: Where Should Agent Intelligence Live?',
    description: 'Examining the crucial architectural boundary between LLM semantic planning and deterministic runtime governance.',
    date: 'Coming soon',
    tags: ['AI Systems', 'Agents'],
    status: 'draft',
    readTime: '8 min read',
    content: `## The Architectural Divide

When designing autonomous systems, one of the first design decisions is determining the division of responsibility between the LLM planner and the deterministic execution harness.

### The Dangers of Over-Empowered Planners

Giving the LLM direct control over system state without strong runtime assertions results in non-reproducible failures. The harness must enforce:
1. Tool validation and safety boundaries
2. Schema enforcement on all outputs
3. Rate limits, timeouts, and state checkpoints
4. Deterministic error recovery trees

### The Sweet Spot

Keep the planner focused on intent parsing, task decomposition, and heuristic evaluation, while leaving execution mechanics, retries, and persistence strictly to the harness.`
  },
  {
    slug: 'memory-is-not-world-state',
    title: 'Memory Is Not World State',
    description: 'Differentiating between episodic context recall and deterministic environmental state tracking in autonomous systems.',
    date: 'Coming soon',
    tags: ['Agent Architecture', 'Context'],
    status: 'draft',
    readTime: '5 min read',
    content: `## Clarifying the Distinction

There is widespread confusion in agent architectures between memory systems and world state tracking.

### Memory Systems
- Working memory: Short-term scratchpad for immediate reasoning
- Episodic memory: Historical summaries of prior conversations and tasks
- Semantic memory: Vector search over static documentation and facts

### World State
- The exact deterministic snapshot of the target environment right now
- Invariant assertions that must hold true before taking the next action
- Direct ground truth that overrides any model-generated assumption`
  }
]
