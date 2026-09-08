import debugPilotThumbnail from '@/assets/images/debugpilot-linkedin-thumb.png'

export interface LinkedInPost {
  id: string
  title: string
  excerpt: string
  postUrl?: string
  topic?: string
  date?: string
  featured?: boolean
  status?: 'thought' | 'published'
  type?: 'text' | 'image' | 'video'
  thumbnail?: string
}

/**
 * Curated list of public LinkedIn thoughts and showcase posts.
 *
 * The featured post highlights Sarath's real DebugPilot video demonstration.
 * Secondary thoughts represent portfolio-native engineering thinking snippets.
 */
export const linkedinPosts: LinkedInPost[] = [
  {
    id: 'debugpilot-spring-boot',
    title: 'Introducing DebugPilot — AI-Powered Spring Boot Debugging Assistant',
    excerpt:
      'After spending nearly 3 years working with Spring Boot, I wanted to make the debugging workflow smarter. DebugPilot explores AI-assisted failure diagnosis, root-cause analysis, and developer guidance inside the Spring Boot workflow.',
    topic: 'DEBUG PILOT',
    postUrl:
      'https://www.linkedin.com/posts/sarath-sivakumar-87a915302_springboot-java-ai-activity-7469023378675441664-HkOS',
    featured: true,
    status: 'published',
    type: 'video',
    thumbnail: debugPilotThumbnail
  },
  {
    id: 'memory-is-not-reality',
    title: 'Memory is not reality.',
    excerpt:
      'An agent remembering what happened is not the same as knowing what is true right now. That difference matters the moment software has to operate in a world that keeps changing underneath it.',
    topic: 'Agent Architecture',
    featured: false,
    status: 'thought',
    type: 'text'
  },
  {
    id: 'planner-can-become-the-problem',
    title: 'The planner can become the problem.',
    excerpt:
      'Every failure makes it tempting to add another prompt, recovery rule or planning step. Eventually the better question is what actually needs model reasoning and what should simply be reliable software.',
    topic: 'Agentic AI',
    featured: false,
    status: 'thought',
    type: 'text'
  }
]
