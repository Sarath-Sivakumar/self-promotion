import { ref } from 'vue'

export type Theme = 'light' | 'dark'

const THEME_STORAGE_KEY = 'sarath-portfolio-theme'

const currentTheme = ref<Theme>('dark')
let isInitialized = false

export function useTheme() {
  const syncFromDOM = () => {
    if (typeof document === 'undefined') return
    const theme = document.documentElement.dataset.theme as Theme
    if (theme === 'light' || theme === 'dark') {
      currentTheme.value = theme
    }
  }

  const setTheme = (theme: Theme) => {
    currentTheme.value = theme
    if (typeof document !== 'undefined') {
      document.documentElement.dataset.theme = theme
      document.documentElement.style.colorScheme = theme
    }
    if (typeof localStorage !== 'undefined') {
      try {
        localStorage.setItem(THEME_STORAGE_KEY, theme)
      } catch {
        // Ignore localStorage quota / security errors
      }
    }
  }

  const toggleTheme = () => {
    const nextTheme: Theme = currentTheme.value === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
  }

  const initTheme = () => {
    if (isInitialized || typeof window === 'undefined') {
      syncFromDOM()
      return
    }
    isInitialized = true

    // 1. Check if dataset.theme was already set by index.html pre-render script
    const domTheme = document.documentElement.dataset.theme as Theme
    if (domTheme === 'light' || domTheme === 'dark') {
      currentTheme.value = domTheme
    } else {
      let saved: string | null = null
      try {
        saved = localStorage.getItem(THEME_STORAGE_KEY)
      } catch {}

      if (saved === 'light' || saved === 'dark') {
        setTheme(saved)
      } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        const resolved: Theme = prefersDark ? 'dark' : 'light'
        currentTheme.value = resolved
        document.documentElement.dataset.theme = resolved
        document.documentElement.style.colorScheme = resolved
      }
    }

    // Listen to OS scheme changes if user hasn't explicitly saved a preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', (e) => {
      try {
        const saved = localStorage.getItem(THEME_STORAGE_KEY)
        if (!saved) {
          const resolved: Theme = e.matches ? 'dark' : 'light'
          currentTheme.value = resolved
          document.documentElement.dataset.theme = resolved
          document.documentElement.style.colorScheme = resolved
        }
      } catch {}
    })
  }

  return {
    theme: currentTheme,
    currentTheme,
    effectiveTheme: currentTheme,
    setTheme,
    toggleTheme,
    initTheme,
  }
}
