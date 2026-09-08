export interface SocialLink {
  name: string
  url: string
  label?: string
  icon?: string
  enabled: boolean
  external?: boolean
}

export const BUY_ME_A_COFFEE_URL = 'https://buymeacoffee.com/sarathsivakumar'
export const GMAIL_COMPOSE_URL = 'https://mail.google.com/mail/?view=cm&fs=1&to=sarathputhenvila@gmail.com'
export const EMAIL_ADDRESS = 'sarathputhenvila@gmail.com'

export const socials: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/Sarath-Sivakumar',
    label: 'github.com/Sarath-Sivakumar',
    icon: 'Github',
    enabled: true,
    external: true
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/sarath-sivakumar',
    label: 'linkedin.com/in/sarath-sivakumar',
    icon: 'Linkedin',
    enabled: true,
    external: true
  },
  {
    name: 'Email',
    url: 'mailto:sarathputhenvila@gmail.com',
    label: 'sarathputhenvila@gmail.com',
    icon: 'Mail',
    enabled: true,
    external: false
  }
]


