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
    id: string
  }[]
}
