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
  categories: ICategory[]
  reactions: {
    userId?: string
  }[]
  adminUser: {
    name: string
  }
  totalDonations?: number
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
