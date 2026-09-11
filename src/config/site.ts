export interface ResumeConfig {
  url: string
  downloadName: string
  ariaLabel: string
}

export interface SiteConfig {
  name: string
  role: string
  location: string
  resume: ResumeConfig
}

export const siteConfig: SiteConfig = {
  name: 'Sarath Sivakumar',
  role: 'AI Systems Engineer',
  location: 'Chennai, India',
  resume: {
    url: '/resume/current.pdf',
    downloadName: 'Sarath-Sivakumar-Resume.pdf',
    ariaLabel: 'Download Sarath Sivakumar Resume'
  }
}
