import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { projects } from '@/data/projects'
import { articles } from '@/data/articles'

import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import ProjectDetailView from '@/views/ProjectDetailView.vue'
import BlogView from '@/views/BlogView.vue'
import BlogArticleView from '@/views/BlogArticleView.vue'
import LabView from '@/views/LabView.vue'
import NowView from '@/views/NowView.vue'
import ContactView from '@/views/ContactView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Sarath Sivakumar — AI Systems Engineer',
      description: 'Portfolio of Sarath Sivakumar, an AI Systems Engineer building autonomous agents, LLM applications, retrieval systems and backend infrastructure.'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: {
      title: 'About — Sarath Sivakumar',
      description: 'Learn more about Sarath Sivakumar, background in backend engineering and focus on AI systems and autonomous agents.'
    }
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView,
    meta: {
      title: 'Projects — Sarath Sivakumar',
      description: 'AI systems, developer tools and engineering products designed and built by Sarath Sivakumar.'
    }
  },
  {
    path: '/projects/natasha',
    name: 'project-natasha',
    component: ProjectDetailView,
    meta: {
      title: 'Natasha — Sarath Sivakumar',
      description: 'Case study of Natasha, an Autonomous Executive Intelligence system designed for goal decomposition, planning, tools, and world state tracking.'
    }
  },
  {
    path: '/projects/echo',
    name: 'project-echo',
    component: ProjectDetailView,
    meta: {
      title: 'Echo — Sarath Sivakumar',
      description: 'Case study of Echo, a real-time voice AI agent for conversational workflows, streaming STT/TTS, and domain-grounded retrieval.'
    }
  },
  {
    path: '/projects/debug-pilot',
    name: 'project-debug-pilot',
    component: ProjectDetailView,
    meta: {
      title: 'Debug Pilot — Sarath Sivakumar',
      description: 'Case study of Debug Pilot, an AI developer copilot analyzing Spring Boot failures with structured retrieval.'
    }
  },
  {
    path: '/projects/:slug',
    name: 'project-detail',
    component: ProjectDetailView,
    meta: {
      title: 'Project — Sarath Sivakumar'
    }
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogView,
    meta: {
      title: 'Writing — Sarath Sivakumar',
      description: 'Notes on AI systems, agent architecture, backend engineering and system design.'
    }
  },
  {
    path: '/blog/:slug',
    name: 'blog-article',
    component: BlogArticleView,
    meta: {
      title: 'Writing — Sarath Sivakumar'
    }
  },
  {
    path: '/lab',
    name: 'lab',
    component: LabView,
    meta: {
      title: 'Lab — Sarath Sivakumar',
      description: 'Research notes, experiments, and technical prototypes by Sarath Sivakumar.'
    }
  },
  {
    path: '/now',
    name: 'now',
    component: NowView,
    meta: {
      title: 'Now — Sarath Sivakumar',
      description: 'What Sarath Sivakumar is currently building, studying, and exploring.'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
    meta: {
      title: 'Contact — Sarath Sivakumar',
      description: 'Get in touch with Sarath Sivakumar regarding AI systems and backend engineering.'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundView,
    meta: {
      title: '404 Not Found — Sarath Sivakumar'
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

router.afterEach((to) => {
  // Dynamic title resolution
  let title = (to.meta.title as string) || 'Sarath Sivakumar — AI Systems Engineer'

  if (to.name === 'project-detail' && to.params.slug) {
    const proj = projects.find(p => p.slug === to.params.slug)
    if (proj) {
      title = `${proj.name} — Sarath Sivakumar`
    }
  } else if (to.name === 'blog-article' && to.params.slug) {
    const article = articles.find(a => a.slug === to.params.slug)
    if (article) {
      title = `${article.title} — Sarath Sivakumar`
    }
  }

  document.title = title

  // Update meta description if provided
  if (to.meta.description) {
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute('content', to.meta.description as string)
    }
  }
})

export default router
