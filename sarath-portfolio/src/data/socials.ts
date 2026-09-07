export interface SocialLink {
  name: string
  url: string
  label?: string
  icon?: string
  enabled: boolean
}

export const socials: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/Sarath-Sivakumar',
    label: 'github.com/Sarath-Sivakumar',
    icon: 'Github',
    enabled: true
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/sarath-sivakumar',
    label: 'linkedin.com/in/sarath-sivakumar',
    icon: 'Linkedin',
    enabled: true
  },
  {
    name: 'Email',
    url: 'mailto:sarathputhenvila@gmail.com',
    label: 'sarathputhenvila@gmail.com',
    icon: 'Mail',
    enabled: true
  }
]

