export interface IProject {
  id?: string
  title?: string
  balance?: number
  image?: string
  slug: string
  creationDate?: string
  admin?: string
  description?: string
  walletAddress?: string
  impactLocation?: string
  qualityScore?: number
  verified?: boolean
  listed?: boolean
  reactions: {
    userId?: string
  }[]
  users: IUser[]
}

export interface IUser {
  name?: string
}

export interface IAdmin {
  name?: string
}

export interface IMediumBlogPost {
  title: string
  author: string
  description: string
  link: string
  pubDate: string
  guid: string
}

export interface ICategory {
  name: string
}

export interface IProjects {
  projects: IProject[]
  totalCount: number
  categories: ICategory[]
}

export interface IProjectBySlug {
  project: IProject
  admin: IAdmin
}
