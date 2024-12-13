export interface CV {
  basics: Basics
  work: Array<Work>
  volunter: Array<Volunter>
  education: Array<Education>
  awards: Array<Awards>
  certificates: Array<Certificates>
  publications: Array<Publications>
  skills: Array<Skills>
  skillsAuthentication: Array<SkillsAuthentication>
  skillsBackend: Array<SkillsBackend>
  skillsCloud: Array<SkillsCloud>
  skillsContainers: Array<SkillsContainers>
  skillsControllVersions: Array<SkillsControllVersions>
  skillsDataCience: Array<SkillsDataCience>
  skillsFrameworks: Array<SkillsFrameworks>
  skillsFrontend: Array<SkillsFrontend>
  skillsIdes: Array<SkillsIdes>
  skillsManagerOfPackages: Array<SkillsManagerOfPackages>
  skillsOperatingSystems: Array<SkillsOperatingSystems>
  skillsTesting: Array<SkillsTesting>
  skillsWeb3: Array<SkillsWeb3>
  languages: Array<Languages>
  interests: Array<Interests>
  references: Array<References>
  projects: Array<Projects>
}

interface Basics {
  name: string
  label: string
  image: string
  email: string
  phone: string
  url: string
  summary: string
  location: Location
  profiles: Array<Profiles>
}

interface Location {
  addres: string
  postalCode: string
  city: string
  countryCode: string
  region: string
}

interface Profiles {
  network: string
  username: string
  url: string
}

interface Work {
  name: string
  position: string
  url: string
  startDate: DateStr
  endDate: DateStr | null
  summary: string
  highlights: Highlight
  technologies: Array<string>
}

type DateStr = `${string}-${string}-${string}`

interface Volunter {
  organization: string
  position: string
  url: string
  startDate: DateStr
  endDate: DateStr
  summary: string
  highlights: Highlight
}

interface Skills {
  name: string
  level: string
  domain: number
  keywords: Array<string>
}


interface SkillsAuthentication {
  name: string
  skills: Array<string>
}

interface SkillsBackend {
  name: string
  skills: Array<string>
}

interface SkillsCloud {
  name: string
  skills: Array<string>
}

interface SkillsContainers {
  name: string
  skills: Array<string>
}

interface SkillsControllVersions {
  name: string
  skills: Array<string>
}

interface SkillsDatabases {
  name: string
  skills: Array<string>
}

interface SkillsDataCience {
  name: string
  skills: Array<string>
}

interface SkillsFrameworks {
  name: string
  skills: Array<string>
}
interface SkillsFrontend {
  name: string
  skills: Array<string>
}

interface SkillsIdes {
  name: string
  skills: Array<string>
}

interface SkillsManagerOfPackages {
  name: string
  skills: Array<string>
}

interface SkillsOperatingSystems {
  name: string
  skills: Array<string>
}

interface SkillsTesting {
  name: string
  skills: Array<string>
}

interface SkillsWeb3 {
  name: string
  skills: Array<string>
}

interface Awards {
  title: string
  date: string
  awarder: string
  summary: string
}

interface Certificates {
  name: string,
  date: DateStr,
  issuer: string,
  url: string
}

interface Publications {
  name: string
  publisher: string
  releaseDate: DateStr
  url: string
  summary: string
}

interface Education {
  institution: string
  url: string
  area: sring
  studyType: string
  startDate: DateStr
  endDate: DateStr
  score: string
  courses: Array<string>
}

interface Languages {
  language: Language
  frequency: string
}

type Language =
  "Spanish"
  | "English"
  | "German"
  | "France"
  | "Italian"
  | "Korean"
  | "Portuguese"
  | "Chinese"
  | "Arabic"
  | "Dutch"
  | "Finnish"
  | "Russian"
  | "Turkish"
  | "Hindi"
  | "Bengali"
  | string

interface Projects {
  name: string
  isActive: boolean
  description: string
  highlights: Highlight
  url: string
  github?: string
}

interface Interests {
  name: string
  keywords: Array<stirng>
}

interface References {
  name: string
  reference: string
}

type Highlight = Array<String>
